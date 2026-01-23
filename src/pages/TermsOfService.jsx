import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            className="min-h-screen bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-10 h-10 text-primary" />
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
                        </div>
                        <p className="text-lg text-muted-foreground">
                            Hiring Bazaar - Terms and Conditions
                        </p>
                        <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
                            <div>
                                <span className="font-semibold">Last Updated:</span> January 2026
                            </div>
                            <div>
                                <span className="font-semibold">Effective Date:</span> January 2026
                            </div>
                        </div>
                    </div>

                    {/* Terms Content */}
                    <div className="prose prose-lg max-w-none dark:prose-invert prose-p:text-muted-foreground prose-li:text-muted-foreground prose-td:text-muted-foreground">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">1. Introduction and Definitions</h2>
                            <p className="text-lg text-muted-foreground">
                                These Terms and Conditions ("T&Cs") govern the use of the Hiring Bazaar platform and the placement services provided by Hiring Bazaar ("Platform," "We," "Us," "Our") to placement agencies, corporate clients, and candidates ("Users").
                            </p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">1.1 Definitions</h3>
                            <ul className="text-lg text-muted-foreground">
                                <li><strong>Platform</strong>: The Hiring Bazaar web and mobile-based marketplace for recruitment services.</li>
                                <li><strong>Placement Agencies</strong>: Recruitment agencies that list job openings and candidates on the Platform.</li>
                                <li><strong>Corporate Clients/Companies</strong>: Organizations hiring candidates through the Platform.</li>
                                <li><strong>Candidates</strong>: Job seekers matched with positions through the Platform.</li>
                                <li><strong>Successful Placement</strong>: A candidate who has been selected by a Company, has received and accepted a formal job offer, and has completed the joining formalities.</li>
                                <li><strong>Replacement</strong>: Providing an alternative candidate when the initial hire fails to continue employment with the Company.</li>
                                <li><strong>Basic Plan</strong>: Payment structure where fees are collected in advance before the candidate joins the organization.</li>
                                <li><strong>Premium Plan</strong>: Payment structure where fees are held in escrow until the candidate is confirmed to be liked/accepted by the Company after the selection process.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">2. Services Overview</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">2.1 Platform Services</h3>
                            <p className="text-lg text-muted-foreground">The Hiring Bazaar Platform provides a marketplace connecting:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Placement Agencies, HRs and Job boards offering recruitment services</li>
                                <li className="text-lg text-muted-foreground">Corporate Clients seeking qualified candidates</li>
                                <li className="text-lg text-muted-foreground">Candidates looking for employment opportunities</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">2.2 Scope of Services</h3>
                            <p className="text-lg text-muted-foreground">
                                Our Platform facilitates candidate sourcing, screening, presentation, and placement coordination. We do not directly employ candidates nor are we responsible for employment decisions, hiring practices, or ongoing employment relationships between Companies and Candidates.
                            </p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">2.3 User Responsibilities</h3>
                            <p className="text-lg text-muted-foreground">Each User is responsible for:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Compliance with applicable laws and regulations in their jurisdiction</li>
                                <li className="text-lg text-muted-foreground">Accuracy and truthfulness of information provided</li>
                                <li className="text-lg text-muted-foreground">Conducting due diligence before engaging with other Users</li>
                                <li className="text-lg text-muted-foreground">Maintaining confidentiality of proprietary information</li>
                                <li className="text-lg text-muted-foreground">Following all Platform policies and procedures</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">3. Account and Registration</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">3.1 Eligibility</h3>
                            <p className="text-lg text-muted-foreground">Users must be:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Legally authorized to conduct business in their jurisdiction</li>
                                <li className="text-lg text-muted-foreground">In compliance with all applicable laws</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">3.2 Account Creation</h3>
                            <p className="text-lg text-muted-foreground">
                                Users must provide accurate, complete, and truthful information during registration. Each User is responsible for maintaining the confidentiality of login credentials and is liable for all activities under their account.
                            </p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">3.3 Account Verification</h3>
                            <p className="text-lg text-muted-foreground">
                                The Platform may require verification of identity, business credentials, and other information. Users must comply with all verification requests.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">4. Payment Plans and Fee Structure</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">4.1 Two Payment Models</h3>
                            <p className="text-lg text-muted-foreground">The Platform offers two distinct payment structures for placement services:</p>

                            <h4 className="text-xl font-semibold mt-4 mb-2">4.1.1 Basic Plan - Advance Payment</h4>
                            <ul>
                                <li className="text-lg text-muted-foreground"><strong>Payment Timeline</strong>: Fees are collected in advance when the candidate accepts the job offer and before the candidate joins the organization.</li>
                                <li className="text-lg text-muted-foreground"><strong>Applicable Parties</strong>: Customers using the Basic Plan.</li>
                            </ul>

                            <h4 className="text-xl font-semibold mt-4 mb-2">4.1.2 Premium Plan - Escrow Payment</h4>
                            <ul>
                                <li className="text-lg text-muted-foreground"><strong>Payment Timeline</strong>: Fees are held in escrow and released only when the candidate is confirmed to be accepted by the Company and candidate also confirms joining after the selection/onboarding process.</li>
                                <li className="text-lg text-muted-foreground"><strong>Applicable Parties</strong>: Customers using the Premium Plan.</li>
                                <li className="text-lg text-muted-foreground"><strong>Refund Eligibility</strong>: Governed by Replacement and Refund Policy (Section 7).</li>
                                <li className="text-lg text-muted-foreground"><strong>Escrow Release Triggers</strong>:
                                    <ul>
                                        <li className="text-lg text-muted-foreground">Candidate has completed first week of employment, AND</li>
                                        <li className="text-lg text-muted-foreground">Company has confirmed candidate acceptance (no replacement request submitted)</li>
                                    </ul>
                                </li>
                                <li className="text-lg text-muted-foreground"><strong>Escrow Dispute Resolution</strong>: See Section 4.4.</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">4.2 Fee Structure</h3>
                            <p className="text-lg text-muted-foreground">All fees are clearly displayed on the Platform before any transaction is initiated.</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">4.3 Payment Processing and Methods</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">All payments are processed through authorized payment gateways integrated with the Platform</li>
                                <li className="text-lg text-muted-foreground">Users must provide valid payment information</li>
                                <li className="text-lg text-muted-foreground">The Platform does not store complete credit card details</li>
                                <li className="text-lg text-muted-foreground">Payment confirmations are sent immediately upon successful transaction</li>
                                <li className="text-lg text-muted-foreground">All payments are final and non-refundable except as explicitly stated in the Replacement and Refund Policy</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">4.4 Escrow Services (Premium Plan)</h3>
                            <p className="text-lg text-muted-foreground"><strong>Escrow Agent</strong>: Razorpay acts as a neutral escrow agent holding fees in a separate, segregated account.</p>

                            <p className="text-lg text-muted-foreground"><strong>Escrow Fund Usage</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Funds are held in trust until release conditions are met</li>
                                <li className="text-lg text-muted-foreground">Funds are not used by Hiring Bazaar for operational purposes</li>
                                <li className="text-lg text-muted-foreground">Funds earn no interest</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Release Conditions</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Candidate completes first week of active employment</li>
                                <li className="text-lg text-muted-foreground">Company confirms candidate acceptance through Platform notification</li>
                                <li className="text-lg text-muted-foreground">No replacement request or dispute has been filed within 7 days of candidate joining</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Dispute Resolution in Escrow</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">If a dispute arises regarding release conditions, both parties may submit evidence</li>
                                <li className="text-lg text-muted-foreground">Hiring Bazaar will review documentation and make a determination within 7 business days</li>
                                <li className="text-lg text-muted-foreground">Decision is binding and communicated to both parties</li>
                                <li className="text-lg text-muted-foreground">Funds are released or refunded accordingly</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Timeline</strong>: Escrow funds are released within 5 business days of confirmation of all release conditions.</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">4.5 Taxes and GST</h3>
                            <p className="text-lg text-muted-foreground">
                                All fees displayed do not include applicable Goods and Services Tax (GST). GST, if applicable, will be added to invoices at the rate specified by Indian tax authorities. Users are responsible for:
                            </p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Understanding their tax obligations</li>
                                <li className="text-lg text-muted-foreground">Maintaining GST registration as required</li>
                                <li className="text-lg text-muted-foreground">Filing appropriate tax returns</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">4.6 Late Payment</h3>
                            <p className="text-lg text-muted-foreground">Payments not received by the due date will accrue interest at 1% per month.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">5. Placement and Matching Process</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">5.1 Candidate Sourcing and Presentation</h3>
                            <p className="text-lg text-muted-foreground">Our HRs are responsible for:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Sourcing qualified candidates meeting Companies' job requirements</li>
                                <li className="text-lg text-muted-foreground">Conducting preliminary screening</li>
                                <li className="text-lg text-muted-foreground">Presenting candidate information, resume, and qualifications to Companies</li>
                                <li className="text-lg text-muted-foreground">Obtaining candidate consent before sharing information</li>
                            </ul>

                            <p className="text-lg text-muted-foreground">Companies are responsible for:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Clearly defining job requirements and qualifications</li>
                                <li className="text-lg text-muted-foreground">Conducting fair and lawful hiring processes</li>
                                <li className="text-lg text-muted-foreground">Providing timely feedback on candidates</li>
                                <li className="text-lg text-muted-foreground">Offering roles in compliance with applicable employment laws</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">5.2 Matching Criteria</h3>
                            <p className="text-lg text-muted-foreground">The Platform may provide matching recommendations, but final selection decisions rest entirely with Companies.</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">5.3 Offer and Acceptance</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">Companies issue formal job offers directly to candidates</li>
                                <li className="text-lg text-muted-foreground">Offers must contain complete information about position, compensation, benefits, and terms</li>
                                <li className="text-lg text-muted-foreground">Candidates must formally accept offers in writing</li>
                                <li className="text-lg text-muted-foreground">Placement agency notifies Platform of successful placement</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">5.4 Joining Confirmation</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">Company confirms candidate joining date</li>
                                <li className="text-lg text-muted-foreground">Candidate is considered "Successful Placement" once they have completed first week of work</li>
                                <li className="text-lg text-muted-foreground">Premium Plan escrow release is triggered upon first-week completion and Company acceptance confirmation</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">6. Candidate Placement Guarantee and Replacement Workflow</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">6.1 Placement Guarantee Period</h3>
                            <p className="text-lg text-muted-foreground">Placement Agencies guarantee the candidate's continued employment for a specified period:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground"><strong>Guarantee Period</strong>: 90 days from first day of employment</li>
                                <li className="text-lg text-muted-foreground"><strong>Covered Period</strong>: From candidate joining until day 90 of employment</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">6.2 Replacement Eligibility</h3>
                            <p className="text-lg text-muted-foreground">Replacement will be provided if a candidate leaves employment or is terminated during the guarantee period <strong>AND</strong> one of the following conditions is met:</p>
                            <p className="text-lg text-muted-foreground"><strong>Placement Fails If</strong>:</p>
                            <ol>
                                <li className="text-lg text-muted-foreground">Hire fails - Candidate quits, gets fired, or is terminated for valid reason during guarantee period</li>
                                <li className="text-lg text-muted-foreground">We provide replacement and</li>
                                <li className="text-lg text-muted-foreground">Company has rejected replacement for valid reasons and</li>
                                <li className="text-lg text-muted-foreground">We can find a replacement within reasonable attempts</li>
                            </ol>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">6.3 Replacement Conditions (When Replacement Will NOT Be Provided)</h3>
                            <p className="text-lg text-muted-foreground">Replacement or refund will NOT be issued if:</p>

                            <p className="text-lg text-muted-foreground"><strong>1. Company Changes Mind About Role</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Company decides they no longer need the position</li>
                                <li className="text-lg text-muted-foreground">Company changes role requirements or specifications</li>
                                <li className="text-lg text-muted-foreground">Company changes team structure or budget allocation</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>2. Internal Promotion</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Company decides to promote candidate internally</li>
                                <li className="text-lg text-muted-foreground">Company decides to hire from existing talent pool</li>
                                <li className="text-lg text-muted-foreground">Company decides to move candidate to different department</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>3. Business Changes</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Client's budget is cut or eliminated</li>
                                <li className="text-lg text-muted-foreground">Company decides against replacement for business reasons</li>
                                <li className="text-lg text-muted-foreground">Client wants it without replacement</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>4. Rejection of Offered Replacement</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Company rejects replacement candidate offered without valid reason</li>
                                <li className="text-lg text-muted-foreground">Company is non-responsive to replacement candidates after 2 attempts</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">6.4 Replacement Workflow - Step by Step</h3>

                            <p className="text-lg text-muted-foreground"><strong>Step 1 - Client Raises Complaint</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Client raises replacement request through H.B. (Hiring Bazaar) Platform</li>
                                <li className="text-lg text-muted-foreground">Issue is reported to us immediately</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Step 2 - Agency Response</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Placement Agency or HRs has 7 business days to respond</li>
                                <li className="text-lg text-muted-foreground">Agency or HRs works with Company to understand situation and identify resolution</li>
                                <li className="text-lg text-muted-foreground">Agency or HRs proposes replacement candidate or works through dispute</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Step 3 - Replacement Provision (If Approved)</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">If replacement is approved, Agency or HRs identifies suitable candidate from database or sources new candidate</li>
                                <li className="text-lg text-muted-foreground">Agency or HRs presents shortlisted candidates to Company within 14 days</li>
                                <li className="text-lg text-muted-foreground">Company interviews and selects from available candidates</li>
                                <li className="text-lg text-muted-foreground">Agency coordinates offer and joining process</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Step 4 - Escalation (If No Resolution)</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">If Agency and Company cannot reach resolution within 21 days of complaint:
                                    <ul>
                                        <li className="text-lg text-muted-foreground">Issue is escalated to Hiring Bazaar mediation team</li>
                                        <li className="text-lg text-muted-foreground">Both parties submit documentation</li>
                                        <li>Hiring Bazaar reviews circumstances and makes determination</li>
                                    </ul>
                                </li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Step 5 - Blacklist Policy (If Applicable)</strong></p>
                            <ul>
                                <li className="text-lg text-muted-foreground">If Agency or HRs fails to provide replacement after multiple attempts:
                                    <ul>
                                        <li className="text-lg text-muted-foreground">Agency or HRs may be flagged in system</li>
                                        <li className="text-lg text-muted-foreground">Company may request different agency or HR for future requirements</li>
                                        <li>Persistent non-compliance may result in suspension from Platform</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">7. Refund and Replacement Policy</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">7.1 Refund Structure</h3>
                            <p className="text-lg text-muted-foreground">Refunds are provided when replacement is not possible according to the following graduated schedule:</p>

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full border-collapse border border-border">
                                    <thead>
                                        <tr className="bg-muted">
                                            <th className="border border-border px-4 py-2 text-left">Timeline</th>
                                            <th className="border border-border px-4 py-2 text-left">Refund Percentage</th>
                                            <th className="border border-border px-4 py-2 text-left">Condition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-border px-4 py-2">Days 1-10</td>
                                            <td className="border border-border px-4 py-2">85% refund</td>
                                            <td className="border border-border px-4 py-2">Replacement not possible and it was demanded before Day 30 of employee joining</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-border px-4 py-2">Days 11-30</td>
                                            <td className="border border-border px-4 py-2">55% refund</td>
                                            <td className="border border-border px-4 py-2">Replacement not possible and it was demanded before Day 60 of employee joining</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-border px-4 py-2">Days 31-90</td>
                                            <td className="border border-border px-4 py-2">25% refund</td>
                                            <td className="border border-border px-4 py-2">Replacement not possible and it was demanded before Day 60 of employee joining</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-border px-4 py-2">After Day 90</td>
                                            <td className="border border-border px-4 py-2">0% refund</td>
                                            <td className="border border-border px-4 py-2">Guarantee period has ended</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">7.2 Basic Plan - Advance Payment Refunds</h3>
                            <p className="text-lg text-muted-foreground">No refunds</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">7.3 Premium Plan - Escrow Refunds</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">If replacement cannot be provided, escrowed funds are refunded to Company</li>
                                <li className="text-lg text-muted-foreground">Refund processing: 5 business days from determination</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">7.4 Refund Not Issued If</h3>
                            <p className="text-lg text-muted-foreground">Refunds will NOT be issued under any circumstances if:</p>
                            <ol>
                                <li className="text-lg text-muted-foreground">Company changed their mind about the role</li>
                                <li className="text-lg text-muted-foreground">Client's budget was cut or position eliminated</li>
                                <li className="text-lg text-muted-foreground">Company decided to promote internally</li>
                                <li className="text-lg text-muted-foreground">Client wants role without replacement</li>
                                <li>Candidate was terminated for valid performance or behavioral reasons</li>
                                <li>Company explicitly waived replacement requirements in writing</li>
                            </ol>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">7.5 Replacement Guarantee Terms</h3>
                            <p className="text-lg text-muted-foreground">The replacement guarantee is limited to:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground"><strong>Frequency</strong>: One replacement candidate offer per original hire within guarantee period</li>
                                <li className="text-lg text-muted-foreground"><strong>Duration</strong>: Up to 90 days from first hire's joining date</li>
                                <li className="text-lg text-muted-foreground"><strong>Scope</strong>: Like-for-like replacement based on original job requirements</li>
                            </ul>
                            <p>If the second replacement candidate also leaves within 90 days, a refund (per 7.1 schedule) will be issued instead of another replacement.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">8. Payment Escrow Details (Premium Plan Only)</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">8.1 Escrow Account Management</h3>
                            <ul>
                                <li>Escrow funds are held in a segregated bank account separate from operational funds</li>
                                <li>Account is held in trust with a bank authorized to hold client funds</li>
                                <li>Razorpay is the named escrow agent</li>
                                <li>No interest is earned on escrowed amounts</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">8.2 Escrow Fund Protection</h3>
                            <ul>
                                <li>Escrowed funds cannot be used for Platform operations</li>
                                <li>Funds are protected from creditor claims against Hiring Bazaar</li>
                                <li>Funds are not subject to Hiring Bazaar's bankruptcy or insolvency</li>
                                <li>Complete audit trail is maintained for all escrow transactions</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">8.3 Escrow Release Instructions</h3>
                            <p className="text-lg text-muted-foreground">Release of escrow funds requires:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Mutual instruction from both Company and Hiring Bazaar, OR</li>
                                <li className="text-lg text-muted-foreground">Automatic release when all pre-determined conditions are met:
                                    <ul>
                                        <li className="text-lg text-muted-foreground">Candidate completes first week of employment</li>
                                        <li>Company submits acceptance confirmation through Platform</li>
                                        <li>No dispute has been filed</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">8.4 Escrow Disputes</h3>
                            <p className="text-lg text-muted-foreground"><strong>Dispute Filing</strong>: Either party may file a dispute regarding escrow release within 7 days of candidate joining.</p>

                            <p className="text-lg text-muted-foreground"><strong>Dispute Documentation</strong>: The filing party must provide:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Detailed explanation of dispute</li>
                                <li className="text-lg text-muted-foreground">Supporting evidence (communications, employment records, etc.)</li>
                                <li>Proposed resolution</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Hiring Bazaar Review</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Hiring Bazaar will review all documentation</li>
                                <li className="text-lg text-muted-foreground">Both parties will be given opportunity to respond (5 business days)</li>
                                <li className="text-lg text-muted-foreground">Determination will be made within 10 business days</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Dispute Resolution Options</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Release full escrow to Company (if candidate failed)</li>
                                <li className="text-lg text-muted-foreground">Release full escrow to Hiring Bazaar (if candidate successful)</li>
                                <li className="text-lg text-muted-foreground">Split escrow (if partial responsibility determined)</li>
                                <li className="text-lg text-muted-foreground">Refund escrowed amount (if replacement cannot be provided)</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Decision Finality</strong>: Hiring Bazaar and Razorpay's determination is final and binding. Parties acknowledge they are waiving right to pursue legal action regarding escrowed amounts once determination is made.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">9. Confidentiality and Data Protection</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">9.1 Confidential Information</h3>
                            <p className="text-lg text-muted-foreground">Both parties agree to maintain confidentiality of:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Candidate personal information, qualifications, and employment history</li>
                                <li className="text-lg text-muted-foreground">Company business strategies, compensation information, and organizational details</li>
                                <li className="text-lg text-muted-foreground">Proprietary information shared during recruitment process</li>
                                <li className="text-lg text-muted-foreground">Placement Agency's business methods and candidate databases</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">9.2 Data Privacy</h3>
                            <p className="text-lg text-muted-foreground">The Platform complies with applicable data protection laws including:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Indian Information Technology Act, 2000</li>
                                <li className="text-lg text-muted-foreground">Applicable data protection regulations</li>
                                <li className="text-lg text-muted-foreground">User privacy policies available on the Platform</li>
                            </ul>

                            <p className="text-lg text-muted-foreground">Candidate data will be used only for:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Placement matching</li>
                                <li className="text-lg text-muted-foreground">Communication with interested Companies</li>
                                <li className="text-lg text-muted-foreground">Platform analytics and improvement</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">9.3 Candidate Information Handling</h3>
                            <ul>
                                <li>Candidates retain ownership of their personal information</li>
                                <li>Information is shared with Companies only upon candidate consent</li>
                                <li>Candidates can request deletion of profile after placement</li>
                                <li>Candidate data is not sold to third parties</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">9.4 Information Sharing Restrictions</h3>
                            <p className="text-lg text-muted-foreground">Users agree NOT to:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Contact candidates or Companies off-platform to bypass fees</li>
                                <li className="text-lg text-muted-foreground">Solicit direct relationships to avoid Platform involvement</li>
                                <li className="text-lg text-muted-foreground">Use Platform data for purposes other than recruitment</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Violation Consequences</strong>: Users who circumvent the Platform or share information improperly may face:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Immediate suspension from Platform</li>
                                <li className="text-lg text-muted-foreground">Forfeiture of pending payments or refunds</li>
                                <li className="text-lg text-muted-foreground">Legal action for damages</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">10. Platform Liability and Disclaimers</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">10.1 As-Is Service</h3>
                            <p className="text-lg text-muted-foreground">The Platform is provided "as-is" without warranty of:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Uninterrupted availability</li>
                                <li className="text-lg text-muted-foreground">Error-free operation</li>
                                <li className="text-lg text-muted-foreground">Specific results or successful placements</li>
                                <li className="text-lg text-muted-foreground">Candidate quality or suitability</li>
                                <li className="text-lg text-muted-foreground">Company legitimacy or reliability</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">10.2 Platform Not Responsible For</h3>
                            <p className="text-lg text-muted-foreground">Hiring Bazaar is NOT responsible for:</p>
                            <ul>
                                <li>Post-placement employer and candidate relationships</li>
                                <li>Candidate performance on the job</li>
                                <li>Company payment of candidate salaries</li>
                                <li>Disputes between employers and candidates</li>
                                <li>Any indirect, consequential, or special damages</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">10.3 User Assumptions</h3>
                            <p className="text-lg text-muted-foreground">Users acknowledge:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Conducting thorough due diligence before engaging with other Users</li>
                                <li className="text-lg text-muted-foreground">Independently verifying all candidate and company information</li>
                                <li className="text-lg text-muted-foreground">Assumption of risk regarding placement decisions</li>
                                <li className="text-lg text-muted-foreground">Responsibility for compliance with employment laws</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">10.4 Limitation of Liability</h3>
                            <p className="text-lg text-muted-foreground">Hiring Bazaar's liability is limited to:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Refund of fees paid in current transaction</li>
                                <li className="text-lg text-muted-foreground">Maximum of 12 months of fees for any claim</li>
                                <li className="text-lg text-muted-foreground">In no case exceeding the actual amount paid to Platform</li>
                            </ul>
                            <p className="text-lg text-muted-foreground">Users waive rights to claim damages exceeding these limits.</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">10.5 Third-Party Content</h3>
                            <p className="text-lg text-muted-foreground">The Platform hosts information provided by Users. We do not:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Verify accuracy of candidate or company information</li>
                                <li className="text-lg text-muted-foreground">Endorse or guarantee the accuracy of any information</li>
                                <li className="text-lg text-muted-foreground">Accept liability for misrepresentation by Users</li>
                                <li className="text-lg text-muted-foreground">Pre-screen all content before publication</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">11. User Conduct and Prohibited Activities</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">11.1 Prohibited Conduct</h3>
                            <p className="text-lg text-muted-foreground">Users agree NOT to:</p>

                            <p className="text-lg text-muted-foreground"><strong>Fraudulent Activities</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Misrepresent identity, qualifications, or experience</li>
                                <li className="text-lg text-muted-foreground">Create fake profiles or duplicate accounts</li>
                                <li className="text-lg text-muted-foreground">Provide false information about candidates or positions</li>
                                <li className="text-lg text-muted-foreground">Engage in any form of deception</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Circumvention</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Contact Users off-platform to bypass fees</li>
                                <li className="text-lg text-muted-foreground">Share candidate information without consent</li>
                                <li className="text-lg text-muted-foreground">Use Platform data for unauthorized purposes</li>
                                <li className="text-lg text-muted-foreground">Solicit direct relationships to avoid commissions</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Discriminatory Practices</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Discriminate based on caste, creed, color, gender, religion, or disability</li>
                                <li className="text-lg text-muted-foreground">Post positions with discriminatory requirements</li>
                                <li className="text-lg text-muted-foreground">Reject candidates based on protected characteristics</li>
                                <li className="text-lg text-muted-foreground">Engage in harassment or hostile behavior</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Intellectual Property</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Upload copyrighted content without permission</li>
                                <li className="text-lg text-muted-foreground">Share proprietary information of competitors</li>
                                <li className="text-lg text-muted-foreground">Use Platform trademarks or logos without authorization</li>
                            </ul>

                            <p className="text-lg text-muted-foreground"><strong>Security and Interference</strong>:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Attempt to hack, crack, or interfere with Platform security</li>
                                <li className="text-lg text-muted-foreground">Use automated tools to scrape data or bypass systems</li>
                                <li className="text-lg text-muted-foreground">Distribute malware or harmful content</li>
                                <li className="text-lg text-muted-foreground">Interfere with other Users' accounts</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">11.2 Consequences of Violation</h3>
                            <p className="text-lg text-muted-foreground">Violations may result in:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Immediate account suspension</li>
                                <li className="text-lg text-muted-foreground">Permanent termination from Platform</li>
                                <li className="text-lg text-muted-foreground">Forfeiture of pending payments</li>
                                <li className="text-lg text-muted-foreground">Legal action and damages</li>
                                <li className="text-lg text-muted-foreground">Reporting to authorities if criminal conduct</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">12. Intellectual Property Rights</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">12.1 Platform Ownership</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">The Platform, including design, code, content, and functionality, is owned by Hiring Bazaar</li>
                                <li className="text-lg text-muted-foreground">All intellectual property rights are reserved by Hiring Bazaar</li>
                                <li className="text-lg text-muted-foreground">Users are granted limited license to use the Platform for legitimate placement purposes</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">12.2 User Content</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">Users retain ownership of content they upload (resumes, job descriptions, company information)</li>
                                <li className="text-lg text-muted-foreground">By uploading content, Users grant Hiring Bazaar a perpetual license to use content for Platform operation and analytics</li>
                                <li className="text-lg text-muted-foreground">Users represent that they own or have permission to use all uploaded content</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">12.3 Restrictions</h3>
                            <p className="text-lg text-muted-foreground">Users may NOT:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Modify, reverse-engineer, or attempt to copy the Platform</li>
                                <li className="text-lg text-muted-foreground">Remove any intellectual property notices</li>
                                <li className="text-lg text-muted-foreground">Use Platform content outside the scope of this agreement</li>
                                <li className="text-lg text-muted-foreground">License or sublicense Platform functionality</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">13. Dispute Resolution and Grievances</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">13.1 Informal Resolution</h3>
                            <p className="text-lg text-muted-foreground">For any dispute, Users agree to first attempt resolution through:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Platform support team communication</li>
                                <li className="text-lg text-muted-foreground">Direct negotiation between parties</li>
                                <li className="text-lg text-muted-foreground">Written documented discussion of grievance</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">13.3 Arbitration</h3>
                            <p className="text-lg text-muted-foreground">If mediation fails:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Disputes will be resolved through binding arbitration</li>
                                <li className="text-lg text-muted-foreground"><strong>Seat</strong>: Arbitration will be conducted in Jaipur, Rajasthan</li>
                                <li className="text-lg text-muted-foreground"><strong>Applicable Law</strong>: These Terms and Conditions will be governed by laws of India</li>
                                <li className="text-lg text-muted-foreground"><strong>Costs</strong>: Each party bears their own costs; arbitration fees split equally</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">13.4 Waiver of Court Action</h3>
                            <p className="text-lg text-muted-foreground">
                                By accepting these Terms and Conditions, Users waive right to pursue disputes through civil courts or legal action for amounts covered by arbitration clause.
                            </p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">13.5 Grievance Redressal Timeline</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground"><strong>Complaint Filing</strong>: Within 15 days of incident</li>
                                <li className="text-lg text-muted-foreground"><strong>Initial Response</strong>: Within 7 business days</li>
                                <li className="text-lg text-muted-foreground"><strong>Investigation</strong>: 15-30 business days</li>
                                <li className="text-lg text-muted-foreground"><strong>Resolution</strong>: Within 45 days of filing</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">14. Term and Termination</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">14.1 Term</h3>
                            <p className="text-lg text-muted-foreground">These Terms and Conditions are effective from the date of acceptance and continue indefinitely unless terminated.</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">14.2 Termination by Users</h3>
                            <p className="text-lg text-muted-foreground">Users may terminate their account at any time by:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Submitting written notice to support@hiringbazaar.com</li>
                                <li className="text-lg text-muted-foreground">Providing 7 days' notice</li>
                                <li className="text-lg text-muted-foreground">Settling all outstanding obligations</li>
                                <li className="text-lg text-muted-foreground">After termination, no new transactions can be initiated</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">14.3 Termination by Hiring Bazaar</h3>
                            <p className="text-lg text-muted-foreground">Hiring Bazaar may immediately terminate User accounts for:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Violation of these Terms and Conditions</li>
                                <li className="text-lg text-muted-foreground">Fraudulent activity or misrepresentation</li>
                                <li className="text-lg text-muted-foreground">Failure to pay outstanding fees</li>
                                <li className="text-lg text-muted-foreground">Repeated complaints or violations</li>
                                <li className="text-lg text-muted-foreground">Legal requirements or government orders</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">14.4 Effect of Termination</h3>
                            <p className="text-lg text-muted-foreground">Upon termination:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">User access to Platform is immediately revoked</li>
                                <li className="text-lg text-muted-foreground">All pending transactions must be settled</li>
                                <li className="text-lg text-muted-foreground">User data may be retained for compliance purposes</li>
                                <li className="text-lg text-muted-foreground">Obligations regarding confidentiality and liability survive termination</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">14.5 Survival Clauses</h3>
                            <p className="text-lg text-muted-foreground">The following sections survive termination:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Confidentiality (Section 9)</li>
                                <li className="text-lg text-muted-foreground">Payment obligations (Section 4)</li>
                                <li className="text-lg text-muted-foreground">Intellectual Property (Section 12)</li>
                                <li className="text-lg text-muted-foreground">Liability and Disclaimers (Section 10)</li>
                                <li className="text-lg text-muted-foreground">Dispute Resolution (Section 13)</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">15. Modifications to Terms and Conditions</h2>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">15.1 Right to Modify</h3>
                            <p className="text-lg text-muted-foreground">Hiring Bazaar reserves the right to modify these Terms and Conditions at any time.</p>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">15.2 Notice of Changes</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">Material changes will be notified to Users at least 30 days in advance</li>
                                <li className="text-lg text-muted-foreground">Notice will be sent via email and posted on Platform</li>
                                <li className="text-lg text-muted-foreground">Non-material changes may be effective immediately</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">15.3 Acceptance of Changes</h3>
                            <ul>
                                <li className="text-lg text-muted-foreground">Continued use of the Platform after notice constitutes acceptance of modified terms</li>
                                <li className="text-lg text-muted-foreground">Users who do not accept changes must discontinue use of Platform</li>
                                <li className="text-lg text-muted-foreground">Accepted terms apply to all future transactions</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">16. Independent Contractor Relationship</h2>
                            <ul>
                                <li className="text-lg text-muted-foreground">Users operate as independent parties</li>
                                <li className="text-lg text-muted-foreground">No partnership, joint venture, or employment relationship exists between Hiring Bazaar and Users</li>
                                <li className="text-lg text-muted-foreground">Each party is solely responsible for their obligations and liabilities</li>
                                <li className="text-lg text-muted-foreground">Hiring Bazaar does not control or direct how Users conduct their business</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">17. Severability</h2>
                            <p className="text-lg text-muted-foreground">If any provision of these Terms and Conditions is found invalid or unenforceable:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">That provision will be modified to the minimum extent necessary to make it valid</li>
                                <li className="text-lg text-muted-foreground">If modification is impossible, the provision will be severed</li>
                                <li className="text-lg text-muted-foreground">Remaining provisions continue in full force and effect</li>
                                <li className="text-lg text-muted-foreground">The severance does not affect the validity of other terms</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">18. Entire Agreement</h2>
                            <p className="text-lg text-muted-foreground">These Terms and Conditions, along with:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Platform Privacy Policy</li>
                                <li className="text-lg text-muted-foreground">Placement Guarantee Agreement</li>
                                <li className="text-lg text-muted-foreground">Payment Agreement</li>
                            </ul>
                            <p className="text-lg text-muted-foreground">constitute the complete agreement between Hiring Bazaar and Users regarding use of the Platform.</p>
                            <p className="text-lg text-muted-foreground">All previous agreements, understandings, and representations are superseded by these Terms and Conditions.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">19. Contact Information</h2>
                            <p className="text-lg text-muted-foreground">For questions, complaints, or inquiries regarding these Terms and Conditions:</p>

                            <div className="bg-muted/30 rounded-lg p-6 my-4">
                                <p className="font-semibold mb-2">Hiring Bazaar</p>
                                <p className="text-lg text-muted-foreground">Email: <a href="mailto:support@hiringbazaar.in" className="text-primary hover:underline">support@hiringbazaar.in</a></p>
                                <p className="text-lg text-muted-foreground">Phone: <a href="tel:+919145938795" className="text-primary hover:underline">+91 9145938795</a></p>
                                <p className="text-lg text-muted-foreground">Address: Jaipur, Rajasthan, India</p>
                            </div>

                            <div className="bg-muted/30 rounded-lg p-6 my-4">
                                <p className="font-semibold mb-2">Grievance Officer</p>
                                <p className="text-lg text-muted-foreground">Email: <a href="mailto:grievance@hiringbazaar.in" className="text-primary hover:underline">grievance@hiringbazaar.in</a></p>
                                <p className="text-lg text-muted-foreground">Response Time: Within 48 hours</p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">20. Notices</h2>
                            <p className="text-lg text-muted-foreground">All formal notices under these Terms and Conditions must be sent to:</p>
                            <ul>
                                <li className="text-lg text-muted-foreground">Email address associated with account, OR</li>
                                <li className="text-lg text-muted-foreground">Registered office address via registered mail</li>
                            </ul>
                            <p className="text-lg text-muted-foreground">Notices are effective upon receipt.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">21. Governing Law</h2>
                            <p className="text-lg text-muted-foreground">
                                These Terms and Conditions are governed by and construed in accordance with the laws of India, specifically applicable laws of Rajasthan.
                            </p>
                        </section>

                        <section className="mb-12 bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                            <h2 className="text-3xl font-bold mb-4">Acceptance of Terms</h2>
                            <p className="mb-4 text-lg text-muted-foreground">By clicking "I Accept" or using the Hiring Bazaar Platform, you acknowledge that:</p>
                            <ol className="space-y-2">
                                <li className="text-lg text-muted-foreground">You have read and understood these Terms and Conditions</li>
                                <li className="text-lg text-muted-foreground">You agree to be bound by all terms and conditions herein</li>
                                <li className="text-lg text-muted-foreground">You consent to all payment and placement terms outlined</li>
                                <li className="text-lg text-muted-foreground">You understand Platform limitations and disclaimers</li>
                                <li className="text-lg text-muted-foreground">You accept responsibility for your use of the Platform</li>
                            </ol>
                            <p className="mt-4 text-sm text-muted-foreground">
                                <strong>Acknowledgment</strong>: These Terms and Conditions will be reviewed and updated as needed to reflect changes in business practices, legal requirements, and market conditions.
                            </p>
                        </section>

                        <div className="text-center py-8 border-t border-border">
                            <p className="text-lg font-semibold text-muted-foreground">End of Terms and Conditions</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </motion.div>
    );
};

export default TermsOfService;
