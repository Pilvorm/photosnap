const features = [
  { name: "Unlimited Story Posting", key: "unlimitedStoryPosting" },
  { name: "Unlimited Photo Upload", key: "unlimitedPhotoUpload" },
  { name: "Embedding Custom Content", key: "embeddingCustomContent" },
  { name: "Customize Metadata", key: "customizeMetadata" },
  { name: "Advanced Metrics", key: "advancedMetrics" },
  { name: "Photo Downloads", key: "photoDownloads" },
  { name: "Search Engine Indexing", key: "searchEngineIndexing" },
  { name: "Custom Analytics", key: "customAnalytics" },
];

const plans = [
  {
    name: "Basic",
    features: {
      unlimitedStoryPosting: true,
      unlimitedPhotoUpload: true,
    },
  },
  {
    name: "Pro",
    features: {
      unlimitedStoryPosting: true,
      unlimitedPhotoUpload: true,
      embeddingCustomContent: true,
      customizeMetadata: true,
    },
  },
  {
    name: "Business",
    features: {
      unlimitedStoryPosting: true,
      unlimitedPhotoUpload: true,
      embeddingCustomContent: true,
      customizeMetadata: true,
      advancedMetrics: true,
      photoDownloads: true,
      searchEngineIndexing: true,
      customAnalytics: true,
    },
  },
];

const ComparisonTable = ({}) => {
  return (
    <section className="mx-7">
      <h2 className="text-xs tracking-[2px] uppercase font-bold">
        The Features
      </h2>
      <hr className="mt-4" size="2" />
      {features.map((feature, idx) => (
        <div key={feature.key} className="mt-6">
          <h3 className="text-xs tracking-[2px] uppercase font-bold">{feature.name}</h3>
          <div className="mt-4 grid grid-cols-3">
            {plans.map((plan, idx) => (
              <div key={idx}>
                <p className="text-[10px] text-black/60 font-semibold uppercase">{plan.name}</p>
                <span className="font-bold"> {plan.features[feature.key] ? "✓" : ""}</span>
              </div>
            ))}
          </div>
          <hr className="mt-6"/>
        </div>
      ))}
    </section>
  );
};

export default ComparisonTable;
