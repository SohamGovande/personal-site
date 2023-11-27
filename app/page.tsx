import Email from "@/components/email";

export default function IndexPage() {
  return (
    <section className="document container grid items-center gap-4 py-10">
      <div className="flex flex-row items-center gap-8">
        <div className="flex-1">
          <img src="/soham-govande.jpg" className="rounded-full border"  alt="Soham Govande"/>
        </div>
        <div style={{ flex: '2 2 0'}} className="h-min">
          <h1 className="text-3xl font-extrabold">
            hi, i&apos;m soham
          </h1>
          <p className="mt-2">
            i&apos;m a student at stanford, from austin, tx. i build companies.
          </p>
        </div>
      </div>
      <h2 className='mt-4'>companies</h2>
      <ul>
        <li>founder @ <a href="https://www.orbis.org/en">ocularcheck</a> (2019-2021; acquired)</li>
        <li>co-founder @ <a href="https://admityogi.com">admityogi</a> (2022-2023; acquired)</li>
        <li>? (2023-now)</li>
      </ul>
      <h2 className='mt-4'>email me</h2>
      <Email />
    </section>
  )
}
