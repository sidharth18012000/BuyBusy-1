// css styles
import styles from "../../styles/home.module.css";

// render the filter bar
export default function FilterBar(props) {
  const { price, setPrice, setCategory } = props;

  return (
    // main container of filter bar
    <div className="container-fluid">
      {/* heading */}

      {/* price ranger and price slider  */}
      <div className="card-text">
        {/* sub heading */}
        <h3>
          Price
          {` <= ${price}`}
          <br />
        </h3>
        {/* slider  */}
        <input
          type="range"
          min="100"
          max="50000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* sort item by category */}
      <div className={styles.categoryBox}>
        {/* sub heading */}
        <span className="input-group-text">Category:</span>

        {/* radio buttons for differnet category */}
        <br />
        <div className="list-group-items ">
          <br />
          {/* men category */}
          <input
            type="radio"
            id="men"
            value="men"
            name="category"
            onClick={() => setCategory("men")}
          />
          <label for="men">Men</label>
          <br />
          {/* women category */}
          <input
            type="radio"
            id="women"
            value="women"
            name="category"
            onClick={() => setCategory("women")}
          />

          <label for="women">Women</label>
          <br />
          {/* electronic */}
          <input
            type="radio"
            id="electric"
            value="electric"
            name="category"
            onClick={() => setCategory("electric")}
          />
          <label for="electric">Electronic</label>
          <br />
          {/* jewellery */}
          <input
            type="radio"
            id="jewellery"
            value="jewellery"
            name="category"
            onClick={() => setCategory("jewellery")}
          />
          <label for="jewellery">Jewellery</label>
          <br />
          {/* none  */}
          <input
            type="radio"
            id="none"
            value="none"
            name="category"
            onClick={() => setCategory("none")}
          />
          <label for="jewellery">None</label>
        </div>
      </div>
    </div>
  );
}
