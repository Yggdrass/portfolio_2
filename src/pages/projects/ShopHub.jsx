import React from "react";
import Header from "../../components/layout/Header";
import ShophubProductList from "../../assets/shophub/shophub_productsList.png";
import ShophubProductPage from "../../assets/shophub/shophub_product_page.png";
import ShophubCartPage from "../../assets/shophub/shophub_cartpage.png";
import ShophubCheckoutPage from "../../assets/shophub/shophub_checkoutpage.png";
import ShophubContactPage from "../../assets/shophub/shophub_contact.png";
import DividingLineTop from "../../components/layout/DividingLineTop";
import DividingLineSection from "../../components/layout/DividingLineSection";

const ShopHub = () => {
  return (
    <>
      <Header />

      <main>
        <div>
          <h1 className="page_title shophub_title">ShopHub</h1>
          <div className="project_brief">
            <p>
              The goal of this project was to apply knowledge of React to build
              an eCom store. The homepage should display a list of all the
              products and a searchbar that filters the products when typing in
              a product name.
            </p>
            <p>
              Clicking on a product will take the user to a product details
              page. On the products page the user can add the product to a cart,
              the number of cartitems should be displayed in the navbar. The
              cartpage should summarize the products and the user can click on a
              checkout button that will clear the cart and give a checkout
              success message.
            </p>
          </div>
        </div>
        <DividingLineTop /> {/* Dividing line top */}
        <div className="project_info_section shophub_page_section_1">
          <img
            src={ShophubProductList}
            alt="a page of listed venues, with a searchbar to search for a specific venue."
            className="project_image"
          />
          <div className="project_description">
            <p>
              A user is able to see a list of products fetched from an API,
              search through them by title and click on one in order to view
              details on that specific product.
            </p>
            <p>
              On each card you can view the product name, price, discounted
              price and a product description.
            </p>
          </div>
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section shophub_page_section_2">
          <div className="project_description">
            <p>
              When clicking on a product card, they will get to this page where
              they can see more details on their selected product.
            </p>
            <p>
              The user can see an image of the product, read a description and
              see the discounted price if there is one. If not the regular price
              will be shown.
            </p>
            <p>
              At he bottom the user can click a button that will add one amount
              of the product to the cart.
            </p>
          </div>
          <img
            src={ShophubProductPage}
            alt="a venue page with details on that venue. Users can create booking and venue managers can update or delete it if they are the owner of this venue."
            className="project_image"
          />
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section shophub_page_section_1">
          <img
            src={ShophubCartPage}
            alt="a page of listed venues, with a searchbar to search for a specific venue."
            className="project_image"
          />
          <div className="project_description">
            <p>
              This is the cart page. All the products will be listed with the
              amount and total price calculated for each product type. Also the
              total amount to pay for all of the items in the cart are
              calculated and shown at the bottom.
            </p>
            <p>
              The total amount of products in the cart are also shown next to
              the cart-link in the navigation menu. At the bottom there is a
              checkout-button they can click to finalize their order.
            </p>
          </div>
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section shophub_page_section_2">
          <div className="project_description">
            <p>
              After the user has clicked the checkout-button, the website clears
              the entire cart and take them to this page.
            </p>
            <p>
              The user gets a message that tells them they have successfully
              submitted the order, and gives them a button which can take them
              back to the home page if they want to purchase more items.
            </p>
          </div>
          <img
            src={ShophubCheckoutPage}
            alt="a venue page with details on that venue. Users can create booking and venue managers can update or delete it if they are the owner of this venue."
            className="project_image"
          />
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section shophub_page_section_1">
          <img
            src={ShophubContactPage}
            alt="a page of listed venues, with a searchbar to search for a specific venue."
            className="project_image"
          />
          <div className="project_description">
            <p>
              The website also has a contact page for the user to send the
              company a message by submitting a form.
            </p>
            <p>
              This form has required fields before it can successfully be sent.
              If the user doesn't meet these criterias, they will be notified in
              the form and the form will not be submitted before they correct
              these.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopHub;
