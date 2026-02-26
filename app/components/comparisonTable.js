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
    <section className="mx-7 mb-16">
      {/* Mobile */}
      <div className="md:hidden">
        <h2 className="text-xs tracking-[2px] uppercase font-bold">
          The Features
        </h2>
        <hr className="mt-4" size="2" />
        {features.map((feature, idx) => (
          <div key={feature.key} className="mt-6">
            <h3 className="text-xs tracking-[2px] uppercase font-bold">
              {feature.name}
            </h3>
            <div className="mt-4 grid grid-cols-3">
              {plans.map((plan, idx) => (
                <div key={idx}>
                  <p className="text-[10px] text-black/60 font-semibold uppercase">
                    {plan.name}
                  </p>
                  <span className="font-bold">
                    {" "}
                    {plan.features[feature.key] ? (
                      <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="15"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          d="M1 8.124L5.623 13 17 1"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              ))}
            </div>
            <hr className="mt-6" />
          </div>
        ))}
      </div>

      {/* Tablet & Desktop */}
      <div className="hidden md:block overflow-x-auto lg:w-7/10 xl:w-5/10 mx-auto my-40">
        <h2 className="uppercase text-[40px] tracking-[4px] text-center font-bold">
          Compare
        </h2>
        <table className="mt-14 w-full table-fixed border-collapse text-xs tracking-[2px]">
          <thead>
            <tr className="border-b">
              <th className="w-2/5 text-left p-4 uppercase">The Features</th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className="w-1/5 py-4 text-center uppercase"
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((feature) => (
              <tr key={feature.key} className="border-b border-[#dfdfdf]">
                <td className="px-4 py-6 uppercase font-semibold">
                  {feature.name}
                </td>

                {plans.map((plan) => (
                  <td
                    key={plan.name}
                    className="px-4 py-6 text-lg font-semibold text-center"
                  >
                    {plan.features[feature.key] ? (
                      <svg
                        className="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="15"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          d="M1 8.124L5.623 13 17 1"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
