import React, { useState, useRef } from 'react';
import './createBillPage.css'; // Import the CSS file
import Rasgulla from "../images/rasgulla.png"


const CreateBillPage = () => {
  const documentRef = useRef(null);
  const [items, setItems] = useState([
    { title: 'Item 1', size: 'S', quantity: 2, price: '20' },
  ]);

  const handleAddItem = () => {
    setItems([...items, { title: '', size: '', quantity: 0, price: '' }]);
  };

  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="invoice-container" ref={documentRef} id="html">
        <table style={{ width: "100%", height: "auto", textAlign: "center" }}>
          <thead style={{ background: "#fafafa", padding: "8px" }}>
            <tr style={{ fontSize: "20px" }}>
              <td colSpan="4" style={{ padding: "20px 20px", textAlign: "center" }}>BILLING</td>
            </tr>
          </thead>
          <tbody style={{ background: "#ffff", padding: "20px" }}>
            <tr>
              <td colSpan="4" style={{ padding: "20px 0px 0px 20px", textAlign: "left", fontSize: "16px", fontWeight: "bold", color: "#000" }}>Hello, Rita</td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "left", padding: "10px 10px 10px 20px", fontSize: "14px" }}>Your order details</td>
            </tr>
          </tbody>
        </table>

        <table style={{ width: "100%", height: "auto", backgroundColor: "#fff", textAlign: "center", padding: "10px", background: "#fafafa" }}>
          <tbody>
            <tr style={{ color: "#6c757d", fontSize: "20px" }}>
              <td style={{ borderRight: "1.5px dashed  #DCDCDC", width: "25%", fontSize: "12px", fontWeight: "700", padding: "0px 0px 10px 0px" }}>Order Date</td>
              <td style={{ borderRight: "1.5px dashed  #DCDCDC", width: "25%", fontSize: "12px", fontWeight: "700", padding: "0px 0px 10px 0px" }}>Order No.</td>
              <td style={{ borderRight: "1.5px dashed  #DCDCDC", width: "25%", fontSize: "12px", fontWeight: "700", padding: "0px 0px 10px 0px" }}>Payment</td>
              <td style={{ width: "25%", fontSize: "12px", fontWeight: "700", padding: "0px 0px 10px 0px" }}>Shipping Address</td>
            </tr>
            <tr style={{ backgroundColor: "#fff", fontSize: "12px", color: "#262626" }}>
              <td style={{ borderRight: "1.5px dashed  #DCDCDC", width: "25%", fontWeight: "bold", background: "#fafafa" }}>11.07.2021</td>
              <td style={{ borderRight: "1.5px dashed  #DCDCDC", width: "25%", fontWeight: "bold", background: "#fafafa" }}>000000001</td>
              <td style={{ borderRight: "1.5px dashed  #DCDCDC", width: "25%", fontWeight: "bold", background: "#fafafa" }}>CASH</td>
              <td style={{ width: "25%", fontWeight: "bold", background: "#fafafa" }}>Kosovo, Prishtina</td>
            </tr>
          </tbody>
        </table>

        <table style={{ width: "100%", height: "auto", backgroundColor: "#fff", marginTop: "0px", padding: "20px", fontSize: "12px", border: "1px solid #ebebeb", borderTop: "0" }}>
          <thead>
            <tr style={{ color: "#6c757d", fontWeight: "bold", padding: "5px" }}>
              <td colSpan="2" style={{ textAlign: "left" }}>PRODUCT INFORMATION</td>
              <td style={{ textAlign: "center" }}>SIZE</td>
              <td style={{ padding: "10px", textAlign: "center" }}>QUANTITY</td>
              <td style={{ textAlign: "right", padding: "10px" }}>PRICE</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td style={{ width: "10%" }}>
                  <a href="#">
                    <img
                      src={Rasgulla}
                      style={{ width: "100px" }}
                      alt="Product"
                    />
                  </a>
                </td>
                <td style={{ width: "20%", marginLeft: "10px", textAlign: "center" }}>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const updatedItems = [...items];
                      updatedItems[index].title = e.target.value;
                      setItems(updatedItems);
                    }}
                  />
                </td>
                <td style={{ width: "20%", padding: "10px", textAlign: "center" }}>
                  <input
                    type="text"
                    value={item.size}
                    onChange={(e) => {
                      const updatedItems = [...items];
                      updatedItems[index].size = e.target.value;
                      setItems(updatedItems);
                    }}
                  />
                </td>
                <td style={{ width: "20%", padding: "10px", textAlign: "center" }}>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const updatedItems = [...items];
                      updatedItems[index].quantity = parseInt(e.target.value);
                      setItems(updatedItems);
                    }}
                  />
                </td>
                <td style={{ width: "30%", fontWeight: "bold", fontSize: "14px" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td style={{ textAlign: "end", fontSize: "13px" }}>
                        <input
                          type="text"
                          value={item.price}
                          onChange={(e) => {
                            const updatedItems = [...items];
                            updatedItems[index].price = e.target.value;
                            setItems(updatedItems);
                          }}
                        />
                        &euro;
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddItem}>Add More Items</button>

        <table style={{ width: "100%", height: "auto", backgroundColor: "#fff", padding: "20px", fontSize: "12px", border: "1px solid #ebebeb", borderTop: "0" }}>
          <tbody>
            <tr style={{ padding: "20px", color: "#000", fontSize: "15px" }}>
              <td style={{ fontWeight: "bold", padding: "5px 0px" }}>Total</td>
              <td style={{ textAlign: "right", padding: "5px 0px", fontWeight: "bold", fontSize: "16px" }}>20 &euro;</td>
            </tr>
            <tr>
              <td colSpan="2" style={{ fontWeight: "bold" }}><span style={{ color: "#c61932", fontWeight: "bold" }}>THANK YOU</span> for shipping with us!</td>
            </tr>
            <tr>
              <td colSpan="2" style={{ fontWeight: "bold", textAlign: "left", padding: "5px 0px 0px 00px", fontSize: "14px" }}>THRED<span>+</span> team</td>
            </tr>
          </tbody>
          <tfoot style={{ paddingTop: "20px", fontWeight: "bold" }}>
            <tr>
              <td style={{ paddingTop: "20px" }}>Need help? Contact us <span style={{ color: "#c61932" }}> info@thred-plus.shop </span></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CreateBillPage;
