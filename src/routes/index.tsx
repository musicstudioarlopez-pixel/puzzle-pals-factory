import { createFileRoute } from "@tanstack/react-router";
import { Puzzle, Sparkles, Truck, BadgeCheck, Phone, Mail, MessageCircle, Ruler, Layers, ShieldCheck, ArrowRight } from "lucide-react";

import hero from "@/assets/categories/hero.jpg";
import copa from "@/assets/categories/copa.jpg";
import biblicas from "@/assets/categories/biblicas.jpg";
import patrulha from "@/assets/categories/patrulha.jpg";
import galinha from "@/assets/categories/galinha.jpg";
import sonic from "@/assets/categories/sonic.jpg";
import bita from "@/assets/categories/bita.jpg";
import marvel from "@/assets/categories/marvel.jpg";
import mcqueen from "@/assets/categories/mcqueen.jpg";
import mario from "@/assets/categories/mario.jpg";
import monica from "@/assets/categories/monica.jpg";
import mickey from "@/assets/categories/mickey.jpg";
import frozen from "@/assets/categories/frozen.jpg";
import barbie from "@/assets/categories/barbie.jpg";
import princesas from "@/assets/categories/princesas.jpg";
import bob from "@/assets/categories/bob.jpg";
import stitch from "@/assets/categories/stitch.jpg";
import educativos from "@/assets/categories/educativos.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ARL Toys — Fábrica de Quebra-Cabeças Infantis no Atacado" },
      { name: "description", content: "Fabricante de quebra-cabeças educativos infantis. Venda no atacado a partir de R$ 2,50/un para revenda. Histórias Bíblicas, Princesas, Sonic, Bob Esponja, Turma da Mônica, Mundo Bita e mais." },
      { property: "og:title", content: "ARL Toys — A Fábrica da Diversão" },
      { property: "og:description", content: "Quebra-cabeças infantis no atacado: preços especiais para revenda." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;800&display=swap" },
    ],
  }),
});

const categories = [
  { name: "Brinquedos Educativos", img: educativos, tag: "Jogo da Memória" },
  { name: "Histórias Bíblicas", img: biblicas, tag: "Evangélico" },
  { name: "Turma da Mônica", img: monica, tag: "Clássico BR" },
  { name: "Mundo Bita", img: bita, tag: "Infantil" },
  { name: "Princesas", img: princesas, tag: "Disney" },
  { name: "Frozen", img: frozen, tag: "Disney" },
  { name: "Barbie", img: barbie, tag: "Meninas" },
  { name: "Sonic", img: sonic, tag: "Aventura" },
  { name: "Super Mario", img: mario, tag: "Game" },
  { name: "Marvel", img: marvel, tag: "Heróis" },
  { name: "McQueen", img: mcqueen, tag: "Carros" },
  { name: "Bob Esponja", img: bob, tag: "Cartoon" },
  { name: "Stitch", img: stitch, tag: "Disney" },
  { name: "Patrulha Canina", img: patrulha, tag: "Pré-escola" },
  { name: "Galinha Pintadinha", img: galinha, tag: "Bebês" },
  { name: "Mickey Mouse", img: mickey, tag: "Disney" },
  { name: "Copa do Mundo", img: copa, tag: "Esportes" },
];

const WHATS = "https://wa.me/5511968106611?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20quebra-cabeças%20no%20atacado.";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-fun grid place-items-center shadow-pop">
              <Puzzle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg" style={{ fontFamily: "Fredoka" }}>ARL Toys</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">A fábrica da diversão</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <a href="#colecoes" className="hover:text-primary transition">Coleções</a>
            <a href="#produto" className="hover:text-primary transition">Produto</a>
            <a href="#atacado" className="hover:text-primary transition">Atacado</a>
            <a href="#contato" className="hover:text-primary transition">Contato</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold shadow-pop hover:translate-y-[-1px] transition">
            <MessageCircle className="w-4 h-4" /> Pedir
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.85 0.18 95 / .4), transparent 40%), radial-gradient(circle at 80% 30%, oklch(0.65 0.19 245 / .35), transparent 45%), radial-gradient(circle at 60% 90%, oklch(0.62 0.23 25 / .25), transparent 50%)" }} />
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-card">
              <Sparkles className="w-3.5 h-3.5" /> Atacado para revenda
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-extrabold leading-[1.02] text-balance" style={{ fontFamily: "Fredoka" }}>
              Quebra-cabeças que <span className="text-primary">despertam</span> a imaginação.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Somos a <strong className="text-foreground">ARL Toys</strong>, fábrica de quebra-cabeças infantis e educativos. Preços especiais para revendedores, lojistas de todo o Brasil.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-bold shadow-pop hover:translate-y-[-2px] transition">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
              <a href="#colecoes" className="inline-flex items-center gap-2 rounded-full bg-card border-2 border-foreground/10 px-6 py-3.5 font-bold hover:border-primary hover:text-primary transition">
                Ver coleções <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <Stat n="R$ 2,50" l="por unidade*" />
              <Stat n="16+" l="coleções" />
              <Stat n="450g" l="cartão triplex" />
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-fun rounded-[2.5rem] rotate-3 opacity-90 shadow-pop" />
              <img src={hero} alt="Diversos quebra-cabeças ARL Toys" className="relative rounded-[2rem] shadow-card w-full object-cover aspect-square" />
              <div className="absolute -top-4 -right-4 bg-accent rounded-2xl px-4 py-3 shadow-pop rotate-6 animate-wiggle">
                <div className="text-xs font-bold uppercase tracking-wider text-accent-foreground">35 peças</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl px-4 py-3 shadow-pop -rotate-3 animate-float">
                <div className="text-xs font-bold text-foreground">📦 Entrega Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BAR */}
      <section className="bg-foreground text-background py-5">
        <div className="mx-auto max-w-7xl px-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { i: <ShieldCheck className="w-5 h-5" />, t: "Material premium 450g" },
            { i: <BadgeCheck className="w-5 h-5" />, t: "Educativo e seguro" },
            { i: <Truck className="w-5 h-5" />, t: "Atacado para revenda" },
            { i: <Sparkles className="w-5 h-5" />, t: "16+ temas licenciados" },
          ].map((x, i) => (
            <div key={i} className="flex items-center gap-3 font-semibold">
              <span className="text-accent">{x.i}</span>{x.t}
            </div>
          ))}
        </div>
      </section>

      {/* COLEÇÕES */}
      <section id="colecoes" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Nosso catálogo</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-balance" style={{ fontFamily: "Fredoka" }}>
                Coleções que as crianças <span className="text-secondary">amam</span>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              De clássicos brasileiros como Turma da Mônica e Mundo Bita aos super-heróis e princesas — escolha as linhas para a sua loja.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <div key={c.name} className="group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-pop transition hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={c.img} alt={`Quebra-cabeça ${c.name}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">{c.tag}</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-bold text-base" style={{ fontFamily: "Fredoka" }}>{c.name}</h3>
                  <a href={WHATS} target="_blank" rel="noreferrer" aria-label={`Pedir ${c.name}`} className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center hover:scale-110 transition">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTO / SPECS */}
      <section id="produto" className="py-20 lg:py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary opacity-30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary opacity-30 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Ficha técnica</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-balance" style={{ fontFamily: "Fredoka" }}>
              Feito para durar muitas <span className="text-accent">brincadeiras</span>.
            </h2>
            <p className="mt-5 text-background/70 max-w-lg">
              Confeccionado em cartão triplex 450g revestido, garantindo maior rigidez e durabilidade. Padrão de qualidade em toda a linha.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Spec icon={<Ruler className="w-5 h-5" />} t="Dimensões" v="32 × 44 cm" />
              <Spec icon={<Puzzle className="w-5 h-5" />} t="Quantidade" v="35 peças*" />
              <Spec icon={<Layers className="w-5 h-5" />} t="Material" v="Triplex 450g revestido" />
              <Spec icon={<BadgeCheck className="w-5 h-5" />} t="Idade" v="A partir de 1 ano" />
            </div>
            <p className="mt-5 text-xs text-background/50">*Turma da Mônica: 30 peças. Demais coleções: 35 peças.</p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={biblicas} alt="" className="rounded-2xl aspect-square object-cover shadow-pop rotate-[-3deg]" />
              <img src={sonic} alt="" className="rounded-2xl aspect-square object-cover shadow-pop rotate-3 translate-y-6" />
              <img src={princesas} alt="" className="rounded-2xl aspect-square object-cover shadow-pop rotate-2" />
              <img src={bita} alt="" className="rounded-2xl aspect-square object-cover shadow-pop -rotate-2 translate-y-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ATACADO CTA */}
      <section id="atacado" className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <div className="relative rounded-[2.5rem] bg-gradient-fun p-10 md:p-16 text-primary-foreground shadow-pop overflow-hidden">
            <div className="absolute top-6 right-8 text-7xl animate-float opacity-30">🧩</div>
            <div className="absolute bottom-6 left-8 text-6xl animate-wiggle opacity-30">🎨</div>
            <span className="inline-block rounded-full bg-background/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
              Condição especial
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-balance" style={{ fontFamily: "Fredoka" }}>
              R$ 2,50 por unidade<br/>em pedidos a partir de 100 un.
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/90 text-lg">
              Monte um mix das coleções e turbine as vendas da sua loja com produtos de alta qualidade e licenças que as crianças reconhecem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-4 font-bold shadow-pop hover:translate-y-[-2px] transition">
                <MessageCircle className="w-5 h-5" /> Solicitar tabela completa
              </a>
              <a href="mailto:arltoysfabrica@gmail.com" className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 px-6 py-4 font-bold hover:bg-background/10 transition">
                <Mail className="w-5 h-5" /> Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="pb-24">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ContactCard icon={<MessageCircle className="w-6 h-6" />} title="WhatsApp" lines={["(11) 96810-6611", "Resposta rápida"]} href={WHATS} cta="Abrir conversa" />
          <ContactCard icon={<MessageCircle className="w-6 h-6" />} title="WhatsApp 2" lines={["(11) 94979-5007", "Resposta rápida"]} href="https://wa.me/5511949795007?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20quebra-cabeças%20no%20atacado." cta="Abrir conversa" />
          <ContactCard icon={<Mail className="w-6 h-6" />} title="E-mail" lines={["arltoysfabrica@gmail.com", "Pedidos e orçamentos"]} href="mailto:arltoysfabrica@gmail.com" cta="Enviar mensagem" />
          <ContactCard icon={<Phone className="w-6 h-6" />} title="Telefone" lines={["+55 11 96810-6611", "Seg a Sex • 9h às 18h"]} href="tel:+5511968106611" cta="Ligar agora" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-fun grid place-items-center">
              <Puzzle className="w-4 h-4 text-primary-foreground" />
            </div>
            <span><strong className="text-foreground">ARL Toys</strong> — A fábrica da diversão</span>
          </div>
          <span>© {new Date().getFullYear()} ARL Toys. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-primary" style={{ fontFamily: "Fredoka" }}>{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{l}</div>
    </div>
  );
}

function Spec({ icon, t, v }: { icon: React.ReactNode; t: string; v: string }) {
  return (
    <div className="rounded-2xl bg-background/10 border border-background/15 p-5 backdrop-blur">
      <div className="flex items-center gap-2 text-accent">{icon}<span className="text-xs uppercase tracking-wider font-bold">{t}</span></div>
      <div className="mt-2 text-xl font-bold">{v}</div>
    </div>
  );
}

function ContactCard({ icon, title, lines, href, cta }: { icon: React.ReactNode; title: string; lines: string[]; href: string; cta: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-pop hover:-translate-y-1 transition">
      <div className="w-12 h-12 rounded-2xl bg-gradient-fun grid place-items-center text-primary-foreground shadow-pop">{icon}</div>
      <h3 className="mt-4 text-xl font-bold" style={{ fontFamily: "Fredoka" }}>{title}</h3>
      {lines.map((l, i) => (
        <p key={i} className={i === 0 ? "mt-2 font-semibold text-foreground" : "text-sm text-muted-foreground"}>{l}</p>
      ))}
      <div className="mt-4 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
        {cta} <ArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
}
