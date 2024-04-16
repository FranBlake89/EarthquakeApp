import PageHeader from "@/components/PageHeader";
import MainNav from "@/components/MainNav";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <>
      <MainNav />
      <Container className="py-5">
        <PageHeader title="Francisco" text="Full Stack Developer" />
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <p class=" fs-4">
            I am a scientist by nature, passionate about technology since I was a child. I grew up in the countryside (Ovalle, Chile). 
            <br />
            <br />
            All my ancestors have been dedicated to agriculture so I decided to make a living from it too (BS. Agricultural Engineering), but I never left my passion... technology and solve problems. Following my passion I won an scholarship to go to study to Spain an get an specialization in Precision Agriculture and IOT applied to agriculture. A few month ago, I have just finished my studies at Seneca College (Toronto, Canada), where I got Ji Hun Kim Mem Scholarship that allow me continuing dreaming.
            <br />
            <br />
            After these years, I have returned with my dear wife Rina to Chile with ours families.
          </p>
          <br />
        </div>
      </Container>
    </>
  );
}
