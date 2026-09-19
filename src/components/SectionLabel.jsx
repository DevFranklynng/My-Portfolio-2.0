export default function SectionLabel({ children, className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 mb-4 text-[#999999] text-xs font-medium ${className}`}
    >
      <span className="w-2 h-2 bg-orange rounded-full shrink-0" />
      {children}
    </div>
  );
}