import PageTransition from "../../components/PageTransition";

export default function Paiement() {
  return (
    <PageTransition>
      <div className="container flex items-center justify-start m-5">
        <div className="bg-white m-2 p-3 rounded-md">
          <h2 className="text-2xl text-blue-600 font-bold">Paiements</h2>
        </div>
      </div>
    </PageTransition>
  );
}
