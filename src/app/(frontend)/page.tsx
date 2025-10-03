import Contacts from "@/components/shared/Contacts";
import Header from "@/components/shared/Header";
import Services from "@/components/shared/Services";

export default async function Home() {
  return (
    <main>
      <Header />
      <Services />
      <Contacts />
    </main>
  );
}
