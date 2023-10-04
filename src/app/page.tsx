import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-black">
        <section>
          <h1>FINDER TASK</h1>
          <h2>Applicant : Pawel Duplaga</h2>
        </section>
        <CategoryGrid />
    </main>
  )
}
