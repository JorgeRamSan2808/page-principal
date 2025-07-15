import AvatarContactMe from "@/components/avatar-contactme";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";

const ContactMe = () => {
  return (
    <>
      <main>
        <div className="flex  h-full bg-no-repeat bg-gradient-cover">
          <TransitionPage />
          <AvatarContactMe />
        </div>
      </main>
    </>
  );
};

export default ContactMe;
