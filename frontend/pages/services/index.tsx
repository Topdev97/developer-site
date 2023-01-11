import Link from 'next/link'
import { Layout } from '../../components/Layout'


export default function ServicesPage(){
  return (
    <Layout>
      <header className="relative h-screen md:h-96 mx-4">
        <div className="hero-container flex flex-col items-center absolute justify-center inset-x-0 top-24 text-center gap-4">
          <h1 className="hero__title">Find the service that you need</h1>
          <h3 className="hero__subtitle">Personalized services to what you need</h3>
        </div>
      </header>
      <main className="mx-6 md:mx-32">
        <section className="landing-page h-96 mb-6 lg:mb-16 md:w-2/3">
          <article className="flex flex-col gap-4">
            <h1>Landing Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestias obcaecati odio illo mollitia excepturi saepe natus labore ipsum enim ut porro modi commodi deserunt, consequatur ad eveniet aliquam cumque?</p>
            <Link className="btn btn--primary" href={'/services/1'}>Create Landing Page</Link>
          </article>
          <img src="" alt="" />
        </section>
        <section className="web-site  h-96 md:flex md:justify-end">
        <article className="flex flex-col md:w-2/3 gap-4 md:text-end">
            <h1>Website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, obcaecati nemo. Tenetur, magni laboriosam voluptates quia alias exercitationem dolor atque velit illum quis </p>
            <Link href={'/services/2'} className=" md:self-end btn btn--primary">Create web page</Link>
          </article>
          <img src="" alt="" />

        </section>
      </main>
    </Layout>
  )
}