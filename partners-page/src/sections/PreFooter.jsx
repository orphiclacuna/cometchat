import { Button } from '../components/Button';
import backgroundImage from '../assets/background2.png';

export default function GetStarted() {
  return (
    <section className="bg-graydark-1">
      <div className="mx-auto bg-cover bg-center overflow-hidden" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="p-12 md:p-20">
            <div className="text-left md:text-center">
                <h2 className="text-5xl font-semibold text-[#FAFAFF] leading-tight pt-8">
                    Get started for free
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl md:mx-auto font-medium">
                    Build and test for as long as you need.<br /> Pick a plan when you're ready.
                </p>
                <div className="mt-8 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-4 m-16">
                    <button
                        className="flex px-4 py-3 justify-center items-start gap-[10px] rounded-xl border border-[rgba(250,250,255,0.10)] bg-[rgba(250,250,255,0.02)] text-white hover:bg-white hover:text-graydark-1 w-full md:w-auto m-2"
                    >
                        Start free trial
                    </button>
                    <Button
                        text="Schedule a demo"
                        type="primary"
                        className="px-6 py-3 text-white w-full md:w-auto m-2"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
