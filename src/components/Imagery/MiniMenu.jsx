import ThemeToggle from "../ThemeToggle"

export default function MiniMenu() {
  return (
    <div className="fixed right-5 top-5 z-40 flex h-fit w-fit rounded-md border border-black bg-white p-2 shadow-lg dark:border-white dark:bg-black lg:top-10">
      <ThemeToggle />
    </div>
  )
}
