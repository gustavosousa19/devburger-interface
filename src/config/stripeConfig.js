import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51TRcssI00nC4m9j58pbqZigmQt2jS4aWuBm7WRjkJli9iRZgvGdOOOxu5tLZ4wtVnDNwpYLRsiv3siO8SFwWGq9800EQ6WhADQ',
);

export default stripePromise;
