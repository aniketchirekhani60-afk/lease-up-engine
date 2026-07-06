import type { Lead } from "../../../data/leadsData";
import { getPipelineSummary } from "../../../data/leadsData";

type LeadPipelineProps = {
  leads: Lead[];
};

function LeadPipeline({ leads }: LeadPipelineProps) {
  const summary = getPipelineSummary(leads);

  return (
    <div className="card">
      <h2 className="chart-card-title">Pipeline Summary</h2>

      <div className="funnel-list">
        {summary.map((stage) => (
          <div key={stage.stage}>
            <div className="funnel-stage-header">
              <span className="funnel-stage-name">{stage.stage}</span>
              <span>
                <span className="funnel-stage-count">{stage.count}</span>
                <span className="funnel-stage-percent">
                  {stage.percentOfTotal}%
                </span>
              </span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${stage.percentOfTotal}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadPipeline;
