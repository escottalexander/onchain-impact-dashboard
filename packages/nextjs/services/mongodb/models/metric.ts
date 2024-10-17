import mongoose, { HydratedDocument, Model, Schema } from "mongoose";

export const MetricNames = {
  impact_index: 0,
  gas_fees_daily: 0,
  active_addresses_daily: 0,
};

export type Metrics = typeof MetricNames;

export interface IMetric {
  label?: string;
  longLabel?: string;
  name: keyof Metrics;
  metricId?: string;
  description: string;
  activated: boolean;
  order: number;
}

interface IMetricModel extends Model<IMetric, object> {
  findAllActivated(): Promise<HydratedDocument<IMetric>[]>;
}

const MetricSchema = new Schema<IMetric, IMetricModel>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  longLabel: {
    type: String,
  },
  metricId: {
    type: String,
  },
  description: {
    type: String,
  },
  label: {
    type: String,
  },
  activated: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    required: true,
  },
});

MetricSchema.statics.findAllActivated = function () {
  return this.find({
    activated: {
      $eq: true,
    },
  });
};
const Metric =
  (mongoose.models.Metric as IMetricModel) || mongoose.model<IMetric, IMetricModel>("Metric", MetricSchema);

export default Metric;
