import { cacheExchange } from '@urql/exchange-graphcache';
import {
  createClient,
  dedupExchange,
  fetchExchange
} from '@urql/svelte';

export const client = createClient({
  url: 'https://countries.trevorblades.com/',
  exchanges: [dedupExchange, cacheExchange({}), fetchExchange]
});

