from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "goutham_arelli_resume_ai_platform.pdf"

PAGE_WIDTH, PAGE_HEIGHT = letter
LEFT = 0.25 * inch
RIGHT = 0.25 * inch
TOP = 0.32 * inch
BOTTOM = 0.25 * inch
CONTENT_WIDTH = PAGE_WIDTH - LEFT - RIGHT

NAVY = colors.HexColor("#182844")
BLUE = colors.HexColor("#0756b5")
MUTED = colors.HexColor("#34445c")


def style(
    name,
    size=8.4,
    leading=None,
    color=NAVY,
    bold=False,
    space_before=0,
    space_after=0,
    alignment=TA_LEFT,
    left_indent=0,
    first_line_indent=0,
):
    font = "Helvetica-Bold" if bold else "Helvetica"
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size + 2,
        textColor=color,
        spaceBefore=space_before,
        spaceAfter=space_after,
        alignment=alignment,
        leftIndent=left_indent,
        firstLineIndent=first_line_indent,
    )


S = {
    "name": style("name", 15.5, 18, BLUE, True, space_after=2),
    "contact": style("contact", 6.4, 8.2, MUTED),
    "section": style("section", 12.3, 14, NAVY, True, space_before=5, space_after=4),
    "summary": style("summary", 7.9, 9.8, NAVY),
    "skills": style("skills", 7.8, 9.6, NAVY, left_indent=10, first_line_indent=-10),
    "role": style("role", 8.4, 10, NAVY, True),
    "company": style("company", 8.2, 9.8, NAVY, True),
    "date": style("date", 7.0, 9, NAVY, alignment=TA_RIGHT),
    "desc": style("desc", 7.8, 9.6, NAVY),
    "bullet": style("bullet", 7.6, 9.25, NAVY, left_indent=19, first_line_indent=-9),
    "tech": style("tech", 7.6, 9.2, NAVY),
    "edu": style("edu", 8.0, 9.6, NAVY, True),
}


def p(text, key):
    return Paragraph(text, S[key])


def bullet(text):
    return p(f"- {text}", "bullet")


def section(title):
    return p(title, "section")


def dated_role(role, date, company):
    row = Table(
        [[p(role, "role"), p(date, "date")]],
        colWidths=[CONTENT_WIDTH * 0.74, CONTENT_WIDTH * 0.26],
        style=TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        ),
    )
    return [row, p(company, "company")]


def dated_education(school, date, degree):
    row = Table(
        [[p(school, "edu"), p(date, "date")]],
        colWidths=[CONTENT_WIDTH * 0.78, CONTENT_WIDTH * 0.22],
        style=TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        ),
    )
    return [row, p(degree, "desc")]


def build_story():
    story = []
    story.append(p("Goutham Arelli", "name"))
    story.append(
        p(
            "Hyderabad | +91-7396437155 | Linkedin | Github | Scaler | "
            "arelligoutham@gmail.com",
            "contact",
        )
    )

    story.append(section("SUMMARY"))
    story.append(
        p(
            "Backend Engineer with 4+ years of experience building scalable "
            "microservices, distributed backend systems, and reliability-focused "
            "platform features. Production experience spans Kotlin, Java, Spring "
            "Boot, Node.js, MySQL, caching, observability, and high-throughput EMI "
            "workflows. Recently applying this backend foundation to AI-agent "
            "infrastructure through MCP and agentic commerce prototypes, using "
            "Codex-assisted development to accelerate implementation while owning "
            "system design, workflows, and integration behavior.",
            "summary",
        )
    )

    story.append(section("SKILLS"))
    story.append(
        p(
            "- <b>Languages:</b> Java, Kotlin, TypeScript, JavaScript, SQL",
            "skills",
        )
    )
    story.append(
        p(
            "- <b>Backend:</b> Spring Boot, Node.js, Express.js, Fastify, REST APIs, "
            "Microservices, API Gateway Design",
            "skills",
        )
    )
    story.append(
        p(
            "- <b>AI / Agent Infrastructure:</b> Model Context Protocol, MCP Servers, "
            "Agentic Commerce, Tool Permissions, Connector Concepts, Provider "
            "Onboarding Flows, AI-Assisted Prototyping",
            "skills",
        )
    )
    story.append(
        p(
            "- <b>Scale / Reliability:</b> Kotlin Coroutines, Caching, Circuit "
            "Breakers, Retry Policies, Timeout Management, OpenTelemetry, "
            "Distributed Tracing",
            "skills",
        )
    )
    story.append(
        p(
            "- <b>Databases / Frontend:</b> MySQL, PostgreSQL, Redis, Angular, React, "
            "Next.js",
            "skills",
        )
    )

    story.append(section("EXPERIENCE"))
    story.extend(dated_role("Backend Engineer", "May 2025 - Present", "Pine Labs"))
    story.extend(
        [
            bullet(
                "Designed and scaled <b>distributed microservices</b> for EMI "
                "workflows, improving throughput, fault tolerance, and reliability "
                "across high-volume payment systems."
            ),
            bullet(
                "Increased <b>EMI Offer Discovery capacity by 2000+ TPS</b> through "
                "Kotlin coroutine-based concurrency optimization, caching "
                "improvements, and refined content negotiation plugins."
            ),
            bullet(
                "Improved production <b>observability</b> by integrating "
                "OpenTelemetry Java Agent and adding custom span attributes for "
                "granular trace filtering, metric analysis, and service diagnostics."
            ),
            bullet(
                "Built a modular <b>HTTP Client Factory</b> using the Singleton "
                "pattern, enabling dedicated service clients with configurable "
                "timeouts, retries, and circuit breaker controls."
            ),
            bullet(
                "Contributed to an <b>agentic commerce framework</b> that allows "
                "merchants to expose catalog, cart, checkout, payments, and order "
                "workflows through a common protocol."
            ),
            bullet(
                "Enabled <b>AI-agent-compatible commerce flows</b> where buyer and "
                "seller agents can coordinate product discovery, checkout, and "
                "payment interactions across providers."
            ),
        ]
    )

    story.append(Spacer(1, 2))
    story.extend(dated_role("FullStack Engineer", "Jan 2024 - Jul 2024", "Eduspeed Technologies"))
    story.extend(
        [
            bullet(
                "Built and enhanced an <b>EdTech platform</b> using Angular and "
                "Spring Boot, improving performance, scalability, and product "
                "functionality across coaching center and assessment workflows."
            ),
            bullet(
                "Led development of UI components and backend services for coaching "
                "center management and assessment modules from the ground up."
            ),
            bullet(
                "Reduced backend calls by <b>50%</b> through caching, lazy loading, "
                "and resource-saving frontend/backend interaction patterns."
            ),
            bullet(
                "Designed optimized database schemas and bulk update mechanisms, "
                "improving large dataset handling efficiency by <b>30%</b>."
            ),
        ]
    )

    story.append(Spacer(1, 2))
    story.extend(
        dated_role(
            "Software Development Engineer (Full Stack)",
            "Aug 2021 - Jan 2024",
            "Cognizant",
        )
    )
    story.extend(
        [
            bullet(
                "Designed and developed a full-stack telecom solution that "
                "centralized customer data, reducing query resolution time by "
                "<b>40%</b> and improving service efficiency."
            ),
            bullet(
                "Architected scalable Spring Boot microservices using MVC design "
                "and SOLID principles for maintainable, extensible architecture."
            ),
            bullet(
                "Engineered a MySQL data layer with optimized schema design for "
                "efficient processing of large-scale telecom customer data."
            ),
            bullet(
                "Implemented secure authentication with JWT, Eureka Server, and API "
                "Gateway, while building a responsive Angular frontend that improved "
                "user satisfaction by <b>20%</b> and scalability by <b>35%</b>."
            ),
        ]
    )

    story.append(section("PROJECTS"))
    story.append(p("MCP Nexus", "company"))
    story.append(
        p(
            "AI-assisted prototype for a secure MCP gateway and connector marketplace.",
            "desc",
        )
    )
    story.extend(
        [
            bullet(
                "Built an <b>AI-assisted TypeScript monorepo prototype</b> for a "
                "Model Context Protocol gateway that explores how users can connect "
                "once and access approved third-party MCP providers through a "
                "managed connector layer."
            ),
            bullet(
                "Designed product and system architecture for customer, admin, and "
                "developer portal flows, including connector discovery, provider "
                "onboarding, MCP server submissions, validation jobs, tool discovery "
                "previews, and admin approval gates."
            ),
            bullet(
                "Prototyped backend and frontend modules using Fastify, Next.js, "
                "React, PostgreSQL, Redis, BullMQ, Zod, Vitest, MCP SDK, and pnpm "
                "workspaces."
            ),
            bullet(
                "Explored governance requirements for MCP platforms, including user "
                "authentication, role-based access, provider token boundaries, "
                "per-tool permissions, audit logging, rate limits, emergency kill "
                "switches, and high-risk tool confirmation flows."
            ),
            bullet(
                "Used <b>Codex-assisted development</b> to convert architecture, "
                "workflow, and product requirements into working platform modules "
                "while reviewing generated code for system behavior and integration "
                "fit."
            ),
        ]
    )

    story.append(section("ACHIEVEMENTS"))
    story.append(bullet("Received H1 FY 25-26 Excellence Award at Pine Labs Technologies."))
    story.append(bullet("Received Star Performer of the Quarter at Eduspeed Technologies."))

    story.append(section("EDUCATION"))
    story.extend(dated_education("Scaler Neovarsity", "2025", "MS in Computer Science"))
    story.append(Spacer(1, 2))
    story.extend(
        dated_education(
            "VIT, Vellore",
            "2021",
            "BE/B.Tech/BS in ECE in IoT | 8.46 CGPA",
        )
    )
    return story


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=LEFT,
        rightMargin=RIGHT,
        topMargin=TOP,
        bottomMargin=BOTTOM,
    )
    frame = Frame(
        LEFT,
        BOTTOM,
        CONTENT_WIDTH,
        PAGE_HEIGHT - TOP - BOTTOM,
        leftPadding=0,
        bottomPadding=0,
        rightPadding=0,
        topPadding=0,
    )
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])
    doc.build(build_story())
    print(OUTPUT)


if __name__ == "__main__":
    main()
