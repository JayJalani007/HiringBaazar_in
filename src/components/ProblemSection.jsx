import { Clock, Scale, Eye } from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: "40%",
    title: "Time Wasted on Manual Screening",
    description:
      "HR teams spend nearly half their working hours sorting through resumes and scheduling calls manually.",
    color: "text-accent",
    barColor: "bg-accent",
  },
  {
    icon: Scale,
    stat: "3x",
    title: "Inconsistent Hiring Quality",
    description:
      "Different interviewers, different standards. Your hiring quality varies wildly across teams and roles.",
    color: "text-gold",
    barColor: "bg-gold",
  },
  {
    icon: Eye,
    stat: "0%",
    title: "Agency Partnership Transparency",
    description:
      "Working with agencies? Good luck tracking progress. No visibility, no accountability, endless delays.",
    color: "text-gold",
    barColor: "bg-gold",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-accent text-xs md:text-sm font-medium mb-4 md:mb-6">
            THE PROBLEM
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium">
            Hiring Shouldn't Be This{" "}
            <span className="italic text-accent">Painful</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto px-2">
            Every day, HR professionals battle through outdated processes that
            drain productivity and hurt candidate experience.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 border border-border card-hover"
            >
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-10 md:w-14 h-10 md:h-14 rounded-lg md:rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                  <problem.icon
                    className={`w-5 md:w-7 h-5 md:h-7 ${problem.color}`}
                  />
                </div>
                <span
                  className={`text-2xl md:text-4xl font-serif ${problem.color}`}
                >
                  {problem.stat}
                </span>
              </div>

              <div
                className={`h-1 ${problem.barColor} rounded-full mb-4 md:mb-6`}
              />
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">
                {problem.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <a
            href="#"
            className="text-xs md:text-sm text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium px-2"
          >
            Watch: A Day in the Life of an Overwhelmed HR Manager
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
