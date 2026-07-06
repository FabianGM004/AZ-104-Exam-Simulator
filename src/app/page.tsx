export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#4b1fa3_0%,#24104d_35%,#090714_100%)] text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-500/30 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute left-8 top-12 h-28 w-10 rotate-45 rounded-full bg-violet-400/25" />
      <div className="absolute bottom-20 right-10 h-32 w-12 rotate-45 rounded-full bg-blue-400/20" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-3xl rounded-[34px] border border-white/10 bg-white/[0.035] px-8 py-14 text-center shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-3xl">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-black">
            AZ
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200/90">
            Microsoft Azure Administrator
          </p>

          <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,.25)]">
            AZ-104
          </h1>

          <h2 className="mb-6 text-5xl font-extrabold text-white drop-shadow-[0_0_16px_rgba(255,255,255,.18)]">
            Exam Simulator
          </h2>

          <p className="mx-auto mb-12 max-w-xl text-lg leading-8 text-violet-100/90">
            Master Azure. Pass AZ-104 with confidence.
          </p>

          <a
            href="/setup"
            className="inline-flex rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-4 text-lg font-bold text-white shadow-[0_10px_30px_rgba(168,85,247,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_45px_rgba(168,85,247,.45)]"
          >
            Start Exam →
          </a>
        </div>
      </section>
    </main>
  );
}