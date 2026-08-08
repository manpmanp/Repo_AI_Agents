# AI AGENT DEVELOPMENT REPOSITORY
Repository Purpose
This is a private repository for synchronizing and developing AI prompts, agent architectures, workflows, experiments, and supporting components. The long-term objective is to develop a collection of specialized AI agents that can later be integrated into purpose-specific systems and commercial AI services.

The repository is therefore intended to serve as a development environment for:
* AI prompts and prompt engineering
* AI agent architectures
* Data collection and processing pipelines
* Research and analysis workflows
* Agent evaluation and experimentation
* Reusable AI components
* Business-oriented AI systems
* Prototype development and MVPs

# AI OPPORTUNITY DISCOVERY ENGINE

## Data Collection and Business Opportunity Discovery

### PURPOSE
The objective of the AI Opportunity Discovery Engine is not to begin with a business idea.
Instead, the system is designed to systematically discover real, recurring, and economically meaningful problems in the Swedish market.
By collecting and analyzing large volumes of information from many independent sources, the system should identify:
* Problems that occur frequently
* Problems that are costly
* Problems that consume significant amounts of human time
* Inefficient or repetitive business processes
* Unmet needs
* Gaps in existing software and services
* Areas where businesses are actively looking for better solutions
* Problems that are particularly suitable for AI-based automation
* Problems for which businesses may have a willingness to pay

Instead of guessing what product the market needs:
The system should allow evidence from the market to determine which problems are worth solving.

### CORE WORKFLOW
Data Sources -- Data Collection -- Data Cleaning & Normalization --
    Evidence Extraction -- Problem Extraction -- Problem Intelligence Database --
        Problem Validation & Aggregation -- Opportunity Scoring -- Prioritized Business Opportunities --
            Product Hypothesis -- MVP -- Validation -- Purpose-Specific AI Service

The system should maintain traceability throughout the entire pipeline.
Every significant conclusion should be traceable back to the underlying evidence and original source.

### DATA COLLECTION

Data collection should be automated and continuously update the underlying data store.
Each source should initially be processed independently because different sources have different structures, semantics, reliability, and collection mechanisms.
After source-specific processing, the extracted information is normalized into a common internal representation.
The system should collect both structured and unstructured data.
3.1 BUSINESS AND JOB MARKET DATA
The purpose is to identify the tasks, processes, skills, and responsibilities that businesses are actually paying people to perform.
This can reveal:
* Repetitive work
* Administrative overhead
* Manual data processing
* Compliance-related work
* Communication overhead
* Documentation requirements
* Recurring operational bottlenecks
* Tasks that may be suitable for AI automation

#### ARBETSFÖRMEDLINGEN AND JOB POSTINGS
Collect job advertisements and analyze them for recurring tasks, requirements, technologies, and responsibilities.
Potential search concepts include:
* problem
* difficult
* expensive
* administration
* regulations
* accounting
* AI
* lack of time
* recruitment
* tax
* VAT
* hiring
* reporting
* documentation
* compliance
* manual work

Extract:
* Job title
* Industry
* Company
* Location
* Company size, when available
* Responsibilities
* Requirements
* Skills
* Software
* Tools
* Certifications
* Languages
* Experience level
* Educational requirements

##### AI ANALYSIS
The system should:
* Cluster jobs by occupation and business function.
* Identify recurring responsibilities.
* Identify frequently requested skills.
* Identify repetitive work.
* Identify administrative tasks.
* Identify tasks requiring significant human time.
* Identify tasks involving structured or semi-structured information.
* Identify processes potentially suitable for AI automation.
* Estimate the potential value of automating those tasks.

#### BUSINESS DISCUSSIONS, FORUMS, SOCIAL MEDIA AND BLOGS

##### Sources may include:
* Business podcasts
* Reddit
* Flashback
* Facebook groups
* Business-specific forums
* Industry blogs
* Online communities
* Other publicly available discussions

The system should identify conversations where business owners, employees, and users describe real-world problems.
Focus areas include:
* Frustrations
* Complaints
* Manual processes
* Inefficient workflows
* Administrative burdens
* Missing functionality
* Difficult software
* Repetitive tasks
* Regulatory complexity
* Communication problems
* Operational bottlenecks
* Suggestions for improving existing businesses or services
* Requests for tools or automation

The key objective is to distinguish between:
"I think this would be a nice product"
and:
"I have this recurring problem and it is costing me time or money."
The second type of evidence is significantly more valuable for opportunity discovery.

#### PODCAST DATA
For relevant business, economic, technology, and industry podcasts:
1. Identify RSS feeds.
2. Retrieve episode metadata.
3. Download audio where permitted.
4. Transcribe audio.
5. Segment and normalize transcripts.
6. Extract relevant statements and evidence.
7. Identify recurring problems and themes.
8. Link extracted problems to industries and business functions.
9. Store source references and timestamps.

The system should look for:
* Business problems
* Operational difficulties
* Inefficiencies
* Regulatory challenges
* Industry changes
* Emerging technologies
* Business opportunities
* Market trends
* Repeated complaints
* Unmet needs

#### REDDIT, FLashBACK AND ONLINE COMMUNITIES
Potential areas include:
* Swedish subreddits
* Entrepreneurship
* Small businesses
* AI
* Programming
* Automation
* Legal issues
* Tax
* Accounting
* Construction
* Restaurants
* E-commerce
* Professional communities
Identify:
* Recurring questions
* Recurring problems
* User requests
* Complaints
* Feature requests
* Workarounds
* Suggestions
* Unmet needs
* Repeated frustrations
The system should prioritize problems that appear independently across multiple discussions and users.

#### MARKET AND INVESTMENT INTELLIGENCE
A separate category of data should be used for understanding broader market conditions and business environments.
This data is not primarily used to identify operational problems. Instead, it provides contextual intelligence about the environment in which businesses operate.
Relevant information includes:
* Market sentiment
* Public opinion
* Economic developments
* Political and economic decisions
* Regulatory changes
* Government policies
* Geopolitical developments
* Industry trends
* Company acquisitions
* Acquisition rumors
* Management changes
* Company growth or contraction
* New investment areas
* New technology directions
* New business models
* Emerging industries
The objective is to understand:
* What is changing?
* Why is it changing?
* Who is affected?
* Which industries are exposed?
* Which businesses may benefit?
* Which businesses may be negatively affected?
* What new problems could emerge?
* What new opportunities could emerge?
The system should analyze both direct events and second-order effects.
Example:
Policy change -- Business impact -- Operational consequences -- New problems -- Potential AI opportunity

#### GOOGLE TRENDS AND SEARCH BEHAVIOR
Search behavior can provide an additional signal of emerging needs.
Identify:
* Increasing search trends
* Decreasing search trends
* Seasonal patterns
* Emerging topics
* Sudden changes in interest
* Recurring searches
* Related queries

Search trends should not be treated as proof of a business problem.
Instead, they should be treated as a signal that can be combined with other evidence sources.

#### PEOPLE ALSO ASK AND QUESTION DATA
Analyze questions that people repeatedly search for.
These questions can represent:
* Information gaps
* Confusion
* Regulatory complexity
* Unmet needs
* Recurring problems
* Difficult processes
* Areas where users require assistance

Repeated questions should be clustered and correlated with other evidence.
A high volume of similar questions across independent sources may indicate a significant underlying problem.

#### MUNICIPALITIES
Analyze municipal business-facing information and processes. Examples include:
* Building permits
* Environmental permits
* Restaurant permits
* Business support
* Land-use permits
* Waste management
* Food regulations
* Local regulations
* Applications
* Reporting requirements

Identify processes that are:
* Time-consuming
* Difficult to understand
* Repetitive
* Documentation-heavy
* Dependent on manual communication
* Difficult to navigate
* Prone to errors
The objective is to identify opportunities to simplify or automate interactions between businesses and municipalities.

#### GOVERNMENT AGENCIES
Potential sources include:
* Skatteverket
* Bolagsverket
* Arbetsmiljöverket
* Försäkringskassan
* Tillväxtverket
* Verksamt
* Other Swedish government agencies

Analyze:
* FAQs
* Guides
* Forms
* Instructions
* Common questions
* Regulatory changes
* Reporting requirements
* Compliance requirements
* Application processes

A recurring question is a potential signal of a recurring problem.
If thousands of businesses repeatedly need clarification about the same process, regulation, or requirement, this may indicate an opportunity for a specialized AI service.
However, frequency alone is insufficient.
The system should additionally evaluate:
* Economic impact
* Time consumption
* Complexity
* Existing solutions
* Willingness to pay
* AI suitability
* Regulatory constraints

#### FACEBOOK AND OTHER BUSINESS GROUPS
Potential communities include:
* Small business owners
* Accounting
* Construction
* Restaurants
* Hairdressers
* E-commerce
* Local business communities
* Industry-specific groups
These communities can provide valuable first-person evidence because business owners often describe operational problems directly.
Extract:
* Problems
* Complaints
* Repeated questions
* Workarounds
* Manual processes
* Software frustrations
* Missing features
* Administrative burdens
* Requests for recommendations

#### TRUSTPILOT AND SOFTWARE REVIEWS
Analyze customer reviews of business software and services.
Potential targets include:
* Fortnox
* Visma
* Bokio
* Hogia
* Other widely used business applications
Particular attention should be given to low-rated reviews, especially 1–3 star reviews.
Extract:
* Recurring complaints
* Missing functionality
* Poor workflows
* Difficult interfaces
* Manual workarounds
* Integration problems
* Reliability problems
* Customer support problems
* Pricing complaints
* Features users explicitly request
The purpose is not simply to identify bad products.
The objective is to discover problems that existing products fail to solve adequately.

#### APP STORE AND GOOGLE PLAY
Analyze reviews of business-oriented applications.
Extract:
* Feature requests
* Bugs
* Missing workflows
* User frustrations
* Repetitive tasks
* Integration problems
* Usability issues
* Automation requests
App reviews can be particularly valuable for identifying gaps in existing products.

### KEYWORD AND SEARCH INTENT ANALYSIS
For relevant problems and topics, identify related search terms.
For each keyword or query cluster, estimate:
* Search volume
* Search trend
* Competition
* Commercial intent
* Purchase intent
* Related problems
* Geographic relevance
* Seasonal behavior
Search data should be treated as supporting evidence rather than definitive evidence of market demand.

### PROBLEM VALIDATION
The system should not treat every mention as a validated problem.
A problem should gain confidence when it is supported by multiple independent signals.
For example:
Job postings + Reddit discussions + Business forums + Government FAQs + Software reviews + Search behavior -- Higher Problem Confidence

The system should distinguish between:
* Single anecdotal observation
* Repeated observation
* Cross-source recurring problem
* Strongly validated problem
* Quantitatively supported market problem
Each problem should therefore have an evidence profile.

### PAYMENT WILLINGNESS AND ECONOMIC VALUE
For every significant problem, the system should estimate its economic value.
Questions include:
* How frequently does the problem occur?
* How many businesses experience it?
* How much time does it consume?
* How much money does it cost?
* How severe is the problem?
* Does it create compliance or financial risk?
* How urgently does the business need a solution?
* What solutions currently exist?
* How much do existing solutions cost?
* How dissatisfied are users with existing solutions?
* How much might a business realistically pay for a better solution?
Payment willingness should be treated as an estimate derived from evidence rather than as an unsupported assumption.

### TECHNICAL IMPLEMENTATION
The system should be modular.
Each data source should have an independent collection and processing module.
Example:
crawler/
    arbetsformedlingen.py
    linkedin.py
    indeed.py
    reddit.py
    flashback.py
    trustpilot.py
    appstores.py
    municipalities.py
    government.py
    podcasts.py
    google_trends.py
    search_queries.py
Each source module is responsible for:
* Data collection
* Rate limiting
* Error handling
* Retries
* Deduplication
* Change detection
* Incremental updates
* Source metadata
* Initial normalization
Downstream processing should be source-independent wherever possible.

### DATA PIPELINE
Source Connectors
      |
Raw Evidence Lake
      |
Data Cleaning
      |
Normalization
      |
Evidence Extraction
      |
Problem Extraction
      |
Entity Resolution
      |
Problem Clustering
      |
Problem Intelligence Database
      |
Opportunity Scoring
      |
Opportunity Ranking
      |
Human Review
      |
Product Hypothesis
      |
MVP Development
The raw evidence layer should be preserved.
This is important because extracted conclusions may need to be re-evaluated as the AI models, scoring methodology, or business assumptions evolve.

### RECOMMENDED TECHNOLOGY STACK
Programming
* Python
Web and Data Collection
* Playwright
* Scrapy
* BeautifulSoup
* lxml
Audio Transcription
* Whisper
AI and NLP
* OpenAI API
* spaCy
* Embedding models
* LLM-based extraction and classification
Database
* PostgreSQL
* pgvector
Search and Retrieval
* Elasticsearch
* OpenSearch
Dashboard / Visualization
MVP:
* Streamlit
Future:
* React
Orchestration and Automation
Potential future components:
* Scheduled workers
* Task queues
* Workflow orchestration
* Event-driven pipelines
* Automated evaluation pipelines

### PROBLEM INTELLIGENCE DATABASE
The most important database in the system should not be a database of business ideas.
It should be a database of evidence-backed problems.
Each problem should exist as a structured object.
Example fields:
Problem ID
Problem statement
Problem description
Problem category
Who experiences the problem?
Industry
Business function
Company size
Geographic market
Source
Source URL
Source type
Evidence excerpts
Number of occurrences
Number of independent sources
First observed
Last observed
Trend
Estimated time loss
Estimated financial cost
Severity
Frequency
Existing solutions
Existing solution quality
User dissatisfaction
AI suitability
Automation potential
Need for human expertise
Regulatory constraints
Swedish market potential
EU market potential
International market potential
Estimated willingness to pay
Competition
Technical difficulty
Time to first customer
Scalability
Evidence confidence
Comments

## OPPORTUNITY SCORE
Each validated problem should receive an Opportunity Score.
The score should combine multiple dimensions rather than relying on a single metric.
Potential dimensions include:
* Problem frequency
* Number of affected businesses
* Evidence strength
* Willingness to pay
* Market size
* Economic impact
* Problem severity
* Existing competition
* Quality of existing solutions
* AI suitability
* Automation potential
* Technical complexity
* Development cost
* Time to first customer
* Scalability
* Swedish market potential
* EU market potential
* International potential

The scoring system should be transparent. 
Every score should be decomposable into its underlying factors. For example: 
Opportunity Score
    ├── Problem Severity
    ├── Frequency
    ├── Economic Impact
    ├── Market Size
    ├── Willingness to Pay
    ├── Competition
    ├── Existing Solution Gap
    ├── AI Suitability
    ├── Technical Feasibility
    ├── Time to First Customer
    └── Scalability
The highest-ranked problems become candidates for product discovery and validation.

## FROM PROBLEM TO PRODUCT
The system should not automatically assume that every high-scoring problem should become an AI product.
Instead:
Validated Problem
      |
Problem Analysis
      |
Existing Solution Analysis
      |
AI Suitability Assessment
      |
Solution Hypothesis
      |
Value Proposition
      |
Target Customer
      |
MVP Definition
      |
Customer Validation
      |
Product Development
The purpose of the discovery engine is to generate high-quality opportunities.
Human judgment and real-world customer validation remain essential before significant product development.

## CORE PRINCIPLES
1. Data before ideas.
2. Problems before solutions.
3. Evidence before assumptions.
4. Multiple independent sources are stronger than isolated observations.
5. Every conclusion should be traceable to its evidence.
6. Raw evidence should be preserved.
7. Automate everything that can reasonably be automated.
8. Separate evidence from interpretation.
9. Separate market signals from validated problems.
10. Separate problems from proposed solutions.
11. Do not confuse popularity with willingness to pay.
12. Do not assume that an AI solution is appropriate simply because AI can technically perform the task.
13. Continuously update the system as new evidence becomes available.
14. Continuously evaluate and improve the extraction, classification, and scoring methodologies.

## FINAL OBJECTIVE
The final platform should operate as an AI-powered Research and Opportunity Discovery Engine that continuously:
* Collects new data
* Monitors market signals
* Extracts evidence
* Identifies recurring problems
* Validates problems across independent sources
* Quantifies problem severity and economic impact
* Analyzes existing solutions
* Evaluates AI suitability
* Estimates willingness to pay
* Ranks business opportunities
* Generates product hypotheses
* Supports MVP selection and development
The ultimate target is the Swedish small-business market, with the potential to expand validated opportunities into the broader EU and international markets.
The strategic objective is:
DATA
→ EVIDENCE
→ PROBLEM
→ VALIDATION
→ OPPORTUNITY
→ PRODUCT
→ MVP
→ AI SERVICE
The system should continuously search for the next high-value problem worth solving rather than continuously trying to invent the next product.