import { checklistItems } from '../data/content'
import { Modal } from './ui/Modal'

const sample = checklistItems.slice(0, 10).map((item, i) => ({
  item,
  status: i % 5 === 4 ? 'Attention Needed' : 'Passed',
}))

export function SampleReportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Sample Inspection Report" widthClassName="max-w-lg">
      <div className="rounded-xl border border-line bg-white p-5">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brass-dark">PrimeInspect</p>
            <p className="text-lg font-bold text-ink">Green Heights · 3 BHK</p>
          </div>
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">PDF Report</span>
        </div>
        <ul className="mt-4 divide-y divide-line">
          {sample.map((row) => (
            <li key={row.item} className="flex items-center justify-between py-2.5 text-sm">
              <span className="text-body">{row.item}</span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  row.status === 'Passed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                }`}
              >
                {row.status}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          This is a preview snapshot. Your full report includes photo annotations across all 250+ checkpoints.
        </p>
      </div>
    </Modal>
  )
}
