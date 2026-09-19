export interface Nugget {
    slug: string;
    title: string;
    category: "STEWARDSHIP" | "CHARACTER" | "STRATEGY" | "LEADERSHIP";
    isGold?: boolean;
    scripture: string;
    image: string;
    quote?: string;
    keyPrinciple?: string;
    marketplaceApplication?: string;
    matchScore?: number;
    excerpt?: string;
  }
  
  export const nuggets: Nugget[] = [
    {
      slug: "masters-return-asset-allocation",
      title: "The Master's Return: Asset Allocation Under Pressure",
      category: "STEWARDSHIP",
      scripture: "Matthew 25:9",
      image: "/images/cinematic-musical1.png",
    },
    {
      slug: "hazard-of-swift-ascent",
      title: "The Hazard of Swift Ascent in Partnerships",
      category: "STEWARDSHIP",
      scripture: "Proverbs 1",
      image: "/images/nuggetcard.png",
    },
    {
      slug: "integrity-premium-product-standards",
      title: "The Integrity Premium: Unyielding Product Standards",
      category: "CHARACTER",
      isGold: true,
      scripture: "Leviticus 19:11",
      image: "/images/collection-main.png",
    },
    {
      slug: "solomon-audit-costly-decisions",
      title: "The Solomon Audit: Evaluating Costly Decisions",
      category: "STRATEGY",
      scripture: "1 Kings 3",
      image: "/images/nuggetCard.png",
    },
    {
      slug: "josephs-seven-year-reserve",
      title: "Joseph's Seven-Year Reserve Plan for Market Volatility",
      category: "STRATEGY",
      scripture: "Genesis 41",
      image: "/images/playlist-details.png",
    },
    {
      slug: "delegation-infrastructure",
      title: "Delegation Infrastructure & Leadership Scale",
      category: "LEADERSHIP",
      scripture: "Exodus 18",
      image: "/images/nuggetCard.png",
    },
    {
      slug: "law-of-just-balances",
      title: "The Law of Just Balances in Corporate Negotiation",
      category: "CHARACTER",
      scripture: "Proverbs 11:1",
      image: "/images/nuggetCard.png",
      quote: "A false balance is an abomination to the Lord, but a just weight is his delight.",
      keyPrinciple:
        "In classical Near Eastern trade, weights were routinely tampered with to exploit asymmetric information in transactions. Proverbs' condemnation of unequal balances asserts that God's economic ethic demands a level playing field as the foundation for sustainable trust in commerce.",
      marketplaceApplication:
        "Establish negotiation frameworks with published, consistent terms. When both parties can verify the agreement's fairness, ensure your pricing, contracts, and disclosures use one honest standard for every counterparty — this establishes a premium brand of trust that compounds over repeated dealings.",
      matchScore: 88,
      excerpt:
        "Careful commentary on how setting honest transaction terms yields long-term competitive enterprise premiums.",
    },
    {
      slug: "negotiation-integrity-genesis-23",
      title: "Negotiation Integrity: Genesis 23 Land Purchase",
      category: "CHARACTER",
      scripture: "Genesis 23",
      image: "/images/nugget-card6.png",
      matchScore: 85,
      excerpt:
        "Analyzing Abraham's insistence on paying full price for real estate to establish high marketplace credibility.",
    },
    {
      slug: "joseph-storage-infrastructure",
      title: "The Joseph Storage Infrastructure & Long-Term Planning",
      category: "STRATEGY",
      scripture: "Genesis 41",
      image: "/images/topic.jpg",
    },
  ];
  
  export const categoryStyles: Record<Nugget["category"], string> = {
    STEWARDSHIP: "bg-amber-300 text-black",
    CHARACTER: "bg-amber-300 text-black",
    STRATEGY: "bg-amber-300 text-black",
    LEADERSHIP: "bg-amber-300 text-black",
  };