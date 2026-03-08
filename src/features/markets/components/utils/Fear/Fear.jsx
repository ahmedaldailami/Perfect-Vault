const Fear = () => {
  return (
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Fear & Greed Index</h3>
      </div>
      <div class="fear-greed">
        <div class="fear-greed-meter">
          <div class="fear-greed-indicator" style="left: 68%;"></div>
        </div>
        <div class="fear-greed-labels">
          <span>Extreme Fear</span>
          <span>Neutral</span>
          <span>Extreme Greed</span>
        </div>
        <div class="fear-greed-value">
          <div class="fear-greed-number">68</div>
          <div class="fear-greed-label">Greed</div>
        </div>
      </div>
    </div>
  );
};
export default Fear;
