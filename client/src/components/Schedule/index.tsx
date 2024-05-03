import styles from './index.module.css';

function Schedule () {
  return (

    <div className={styles.container}>
      <div className={styles.rowDay}>
        <div className={styles.day}>
          <h3>monday</h3>
          <h4>29/04</h4>
        </div>
        <div className={styles.day}>
          <h3>tuesday</h3>
          <h4>29/04</h4>
        </div>
        <div className={styles.day}>
          <h3>wednesday</h3>
          <h4>29/04</h4>
        </div>
        <div className={styles.day}>
          <h3>thursday</h3>
          <h4>29/04</h4>
        </div>
        <div className={styles.day}>
          <h3>friday</h3>
          <h4>29/04</h4>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.route}>
          <h5>Route 1</h5>
          <h6>Stop 4</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 2</h5>
          <h6>Stop 5</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 1</h5>
          <h6>Stop 4</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 5</h5>
          <h6>Stop 4</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 2</h5>
          <h6>Stop 4</h6>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.route}>
          <h5>Route 1</h5>
          <h6>Stop 4</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 1</h5>
          <h6>Stop 4</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 2</h5>
          <h6>Stop 1</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 2</h5>
          <h6>Stop 1</h6>
        </div>
        <div className={styles.route}>
          <h5>Route 1</h5>
          <h6>Stop 4</h6>
        </div>
      </div>
    </div>
  );
}


export default Schedule;
