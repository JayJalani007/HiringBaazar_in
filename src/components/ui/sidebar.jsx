import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

const SidebarProvider = React.forwardRef(
  ({ defaultOpen = true, open: openProp, onOpenChange, className, style, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [_open, _setOpen] = React.useState(defaultOpen);

    const open = openProp ?? _open;

    const setOpen = React.useCallback(
      (value) => {
        const next = typeof value === "function" ? value(open) : value;
        onOpenChange ? onOpenChange(next) : _setOpen(next);
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${next}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [open, onOpenChange],
    );

    const toggleSidebar = React.useCallback(() => {
      isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o);
    }, [isMobile, setOpen]);

    React.useEffect(() => {
      const handler = (e) => {
        if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [toggleSidebar]);

    const state = open ? "expanded" : "collapsed";

    const value = React.useMemo(
      () => ({
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      }),
      [state, open, openMobile, isMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={value}>
        <TooltipProvider delayDuration={0}>
          <div
            ref={ref}
            style={{
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            }}
            className={cn("group/sidebar-wrapper flex min-h-svh w-full", className)}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

/* ---------------- Sidebar ---------------- */

const Sidebar = React.forwardRef(
  ({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div ref={ref} className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar", className)} {...props}>
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetContent
            side={side}
            className="w-[--sidebar-width] bg-sidebar p-0 [&>button]:hidden"
            style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
          >
            <div className="flex h-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
        className="group hidden md:block"
      >
        <div className="fixed inset-y-0 z-10 w-[--sidebar-width] md:flex">
          <div className={cn("flex h-full w-full flex-col bg-sidebar", className)} {...props}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

/* ---------------- Controls ---------------- */

const SidebarTrigger = React.forwardRef((props, ref) => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button ref={ref} variant="ghost" size="icon" onClick={toggleSidebar} {...props}>
      <PanelLeft />
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef((props, ref) => {
  const { toggleSidebar } = useSidebar();
  return <button ref={ref} onClick={toggleSidebar} {...props} />;
});
SidebarRail.displayName = "SidebarRail";

/* ---------------- Layout ---------------- */

const SidebarInset = React.forwardRef((props, ref) => (
  <main ref={ref} className="flex min-h-svh flex-1 flex-col bg-background" {...props} />
));
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef((props, ref) => (
  <Input ref={ref} className="h-8" {...props} />
));
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef((props, ref) => (
  <div ref={ref} className="flex flex-col gap-2 p-2" {...props} />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef((props, ref) => (
  <div ref={ref} className="flex flex-col gap-2 p-2" {...props} />
));
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef((props, ref) => (
  <Separator ref={ref} className="mx-2 bg-sidebar-border" {...props} />
));
SidebarSeparator.displayName = "SidebarSeparator";

/* ---------------- Menu ---------------- */

const SidebarContent = React.forwardRef((props, ref) => (
  <div ref={ref} className="flex flex-1 flex-col gap-2 overflow-auto" {...props} />
));
SidebarContent.displayName = "SidebarContent";

const SidebarMenu = React.forwardRef((props, ref) => (
  <ul ref={ref} className="flex flex-col gap-1" {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef((props, ref) => <li ref={ref} {...props} />);
SidebarMenuItem.displayName = "SidebarMenuItem";

/* ---------------- Variants ---------------- */

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-sidebar-accent focus-visible:ring-2",
  {
    variants: {
      size: {
        sm: "h-7 text-xs",
        default: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef(
  ({ asChild = false, isActive, size, tooltip, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const btn = (
      <Comp
        ref={ref}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ size }), className)}
        {...props}
      />
    );

    if (!tooltip) return btn;

    return (
      <Tooltip>
        <TooltipTrigger asChild>{btn}</TooltipTrigger>
        <TooltipContent hidden={state !== "collapsed" || isMobile}>{tooltip}</TooltipContent>
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

/* ---------------- Skeleton ---------------- */

const SidebarMenuSkeleton = React.forwardRef(({ showIcon = false }, ref) => {
  const width = `${Math.floor(Math.random() * 40) + 50}%`;
  return (
    <div ref={ref} className="flex h-8 items-center gap-2 px-2">
      {showIcon && <Skeleton className="size-4" />}
      <Skeleton className="h-4" style={{ width }} />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

/* ---------------- Exports ---------------- */

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSkeleton,
  SidebarInput,
  useSidebar,
};
