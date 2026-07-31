import ContactForm from "../../components/ContactForm";
import { StaggerGroup, StaggerItem } from "../../components/Stagger";

export const metadata = {
  title: "Contact | Active Engineering Group",
  description:
    "Get in touch with Active Engineering Group — address, phone, email, and a contact form for our Kigali, Rwanda office.",
};

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="display">Get in touch</h1>
        <StaggerGroup className="grid-2">
          <StaggerItem>
            <div className="card">
              <h3>Contact Details</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Address</td>
                    <td>2nd Floor, near Adventist Gisozi, KG14 Ave, Kigali, Rwanda</td>
                  </tr>
                  <tr>
                    <td>Emails</td>
                    <td>activegroup2021@gmail.com / sixson2012@gmail.com / msvirgile1@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phones</td>
                    <td>+250 781 537 973 / +250 788 981 320</td>
                  </tr>
                </tbody>
              </table>
              <iframe
                className="map-embed"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=KG14%20Ave%2C%20Gisozi%2C%20Kigali&output=embed"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <ContactForm />
          </StaggerItem>
        </StaggerGroup>
      </div>
    </main>
  );
}
