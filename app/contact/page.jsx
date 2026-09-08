import ContactForm from "../../components/ContactForm";
import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

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
                    <td className="table-label">
                      <MapPin aria-hidden="true" /> Address
                    </td>
                    <td>
                      <a href="https://maps.app.goo.gl/RFJBAnzWnBmPauit9" target="_blank" rel="noopener noreferrer">
                        3rd Floor, near Romantic Garden, Gisozi, KG14 Ave, Kigali, Rwanda
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-label">
                      <Mail aria-hidden="true" /> Emails
                    </td>
                    <td>activegroup2021@gmail.com / sixson2012@gmail.com / msvirgile1@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="table-label">
                      <Phone aria-hidden="true" /> Phones
                    </td>
                    <td>+250 781 537 973 / +250 788 981 320</td>
                  </tr>
                </tbody>
              </table>

              <h3>
                <Clock aria-hidden="true" style={{ verticalAlign: "-3px", marginRight: 8 }} />
                Business Hours
              </h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Monday – Friday</td>
                    <td>8:00 AM – 5:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9:00 AM – 1:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>Emergency Support</td>
                    <td>24/7 available for ongoing projects</td>
                  </tr>
                </tbody>
              </table>
              <iframe
                className="map-embed"
                loading="lazy"
                allowFullScreen
                      
                src="https://www.google.com/maps?q=-1.925326,30.055490&output=embed"
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
