import Navbar from './sections/Navbar';
import HeroForm from './sections/HeroForm';
import CustomersSection from './sections/CustomersSection';
import PartnerAdvantages from './sections/PartnerAdvantages';
import Programs from './sections/OurPrograms';
import GetStarted from './sections/PreFooter';
import FAQs from './sections/FAQs';
import Footer from './sections/Footer';
import QuickLinks from './sections/QuickLinks';
import './App.css';

export default function App() {
  return (
    <div className="bg-graydark-1 min-h-screen text-graydark-12">
      <Navbar />
      <HeroForm />
      <CustomersSection />
      <PartnerAdvantages />
      <Programs />
      <FAQs />
      <GetStarted />
      <QuickLinks />
      <Footer />
    </div>
  );
}
