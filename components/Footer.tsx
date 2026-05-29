
export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 py-10">
      <div className="px-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-lg font-light tracking-wide">
            Swae On Earth
          </h3>

          <p className="mt-2 max-w-md text-sm text-gray-500">
            Walking from the United Kingdom to Kenya.
            A collection of journal entries,
            photographs and reflections from the road.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          One continent crossed. Another waiting.
        </p>
      </div>
    </footer>
  );
}
