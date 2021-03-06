import Link from "next/link"

export default function Footer() {
    return (
        <footer>
        <section id="footer-nav">
          <div>
            <div>
              <img src="/img/logo_holiday.png" alt="" />
            </div>
            <p>Plan and book your perfect trip with
            expert advice, travel tips destination
              information from us</p>
            <p>© 2020 Thousand Sunny. All rights reserved</p>
          </div>
          <div>
            <h4>Destinations</h4>
            <p>Africa</p>
            <p>Antarctica</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>America</p>
          </div>
          <div>
            <h4>Shop</h4>
            <p>Destination Guides</p>
            <p>Pictorial & Gifts</p>
            <p>Special Offers</p>
            <p>Delivery Times</p>
            <p>FAQs</p>
          </div>
          <div>
            <h4>Interests</h4>
            <p>Adventure Travel</p>
            <p>Art And Culture</p>
            <p>Wildlife And Nature</p>
            <p>Family Holidays</p>
            <p>Food And Drink</p>
          </div>
        </section>
        <section id="social-media">
          <Link href="https://www.twitter.com"><i className="fab fa-twitter"></i></Link>
          <Link href="https://www.instagram.com"><i className="fab fa-instagram"></i></Link>
          <Link href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></Link>
          <Link href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></Link>
          <Link href="https://www.youtube.com"><i className="fab fa-youtube"></i></Link>
        </section>
      </footer>
    )
}
