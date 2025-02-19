import { useId, forwardRef } from 'react';

import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  ({ width = 40, height = 40, disableLink = false, className, href = '/', sx, ...other }, ref) => {
    const theme = useTheme();

    const gradientId = useId();

    const PRIMARY_LIGHT = theme.vars.palette.primary.light;

    const PRIMARY_MAIN = theme.vars.palette.primary.main;

    const PRIMARY_DARK = theme.vars.palette.primary.dark;

    /*
     * OR using local (public folder)
     * const logo = ( <Box alt="logo" component="img" src={`${CONFIG.site.basePath}/logo/logo-single.svg`} width={width} height={height} /> );
     */

    const logo = (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id={`${gradientId}-1`} x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id={`${gradientId}-2`} x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id={`${gradientId}-3`} x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g transform="matrix(0.17218, 0, 0, -0.162189, -201.533099, 675.449656)" fill="#000000" stroke="none">
          <path fill={`url(#${`${gradientId}-1`})`} d="M 2312.37 3822.94 C 2312.37 3818.44 2329.32 3764.54 2349.11 3701.65 C 2380.19 3605.07 2385.85 3571.37 2380.19 3474.79 C 2374.55 3366.98 2368.89 3351.26 2296.82 3214.25 L 2221.94 3068.25 L 2220.52 2939.1 C 2220.52 2818.93 2223.35 2806.58 2260.08 2754.91 C 2292.59 2708.87 2298.24 2687.53 2298.24 2617.91 C 2298.24 2571.86 2294 2534.8 2288.34 2534.8 C 2282.7 2534.8 2261.5 2548.28 2238.9 2565.12 C 2217.7 2580.84 2197.92 2593.2 2195.09 2589.83 C 2180.96 2574.1 2139.98 2403.41 2132.91 2331.53 C 2121.61 2210.24 2158.35 2120.4 2271.4 1990.12 C 2387.26 1857.6 2433.89 1775.62 2477.69 1628.5 C 2497.47 1562.24 2520.09 1488.11 2527.15 1465.65 C 2534.22 1442.07 2545.52 1422.99 2551.18 1422.99 C 2558.24 1422.99 2568.13 1474.65 2572.37 1538.65 C 2586.5 1694.76 2617.58 1805.94 2671.28 1900.27 C 2726.39 1995.74 2756.07 2018.2 2777.26 1985.63 C 2802.69 1949.69 2795.63 1844.13 2764.54 1782.36 C 2744.76 1743.05 2741.94 1726.2 2754.66 1726.2 C 2782.91 1727.33 2900.19 1800.33 2935.52 1840.75 C 2953.89 1860.97 2958.13 1871.08 2945.41 1863.21 C 2912.91 1841.88 2874.77 1857.6 2893.13 1884.55 C 2900.19 1895.79 2901.61 1905.89 2895.95 1905.89 C 2890.31 1905.89 2905.85 1916.01 2931.29 1928.35 C 2979.33 1951.93 3018.89 1957.55 3018.89 1940.71 C 3018.89 1914.87 2973.68 1832.89 2932.69 1785.73 C 2907.27 1756.53 2839.43 1692.52 2781.5 1643.1 C 2679.76 1555.5 2607.7 1465.65 2627.48 1449.93 C 2650.09 1431.97 2739.11 1480.25 2857.81 1574.59 C 2958.13 1653.21 2997.7 1694.76 3038.68 1759.9 C 3106.5 1872.2 3137.59 1987.87 3126.28 2102.42 C 3116.4 2223.71 3090.96 2283.24 2969.43 2483.14 C 2864.87 2652.72 2823.89 2760.53 2801.28 2916.64 L 2791.39 2978.4 L 2828.13 2935.73 C 2847.91 2912.14 2879.01 2862.73 2897.37 2824.55 C 2934.11 2748.18 2955.31 2752.67 2939.76 2835.78 C 2927.05 2902.04 2893.13 2967.18 2829.55 3042.42 C 2801.28 3074.99 2778.67 3112.05 2777.26 3124.41 C 2777.26 3141.25 2770.2 3136.75 2753.24 3107.55 C 2724.98 3059.26 2724.98 2866.1 2754.66 2762.78 L 2773.02 2694.27 L 2583.68 2835.78 C 2479.11 2914.39 2388.67 2987.39 2381.61 2997.5 C 2359 3031.19 2367.48 3094.08 2414.11 3228.85 C 2459.33 3361.36 2473.45 3496.13 2449.43 3573.62 C 2439.55 3605.07 2440.95 3605.07 2467.81 3565.75 C 2508.79 3505.11 2525.74 3433.24 2537.05 3263.66 C 2546.93 3125.53 2551.18 3106.43 2589.33 3051.4 L 2630.3 2990.76 L 2641.61 3159.21 C 2654.32 3360.24 2638.78 3446.72 2575.2 3553.41 C 2520.09 3644.37 2312.37 3856.63 2312.37 3822.94 Z M 2566.72 2669.57 C 2747.59 2497.74 2818.24 2395.54 2854.98 2250.67 C 2884.65 2135 2883.24 2127.14 2839.43 2190.02 C 2819.65 2219.22 2798.46 2242.81 2794.22 2241.69 C 2789.98 2241.69 2746.18 2205.75 2698.13 2163.07 C 2621.83 2095.68 2548.35 1997.98 2518.67 1923.86 C 2510.19 1904.77 2504.55 1908.13 2480.53 1945.2 C 2464.99 1967.66 2429.65 2012.58 2404.22 2041.78 C 2377.37 2072.1 2351.94 2106.92 2347.7 2119.28 C 2337.8 2143.98 2312.37 2149.6 2312.37 2128.26 C 2310.96 2120.4 2302.48 2126.01 2292.59 2141.74 C 2265.74 2182.16 2253.02 2268.64 2262.92 2338.27 L 2272.8 2400.03 L 2299.66 2373.08 C 2315.2 2358.48 2326.5 2333.77 2326.5 2318.05 C 2326.5 2275.37 2343.46 2220.35 2356.18 2220.35 C 2363.24 2220.35 2364.65 2227.09 2361.83 2234.95 C 2357.59 2242.81 2380.19 2265.27 2411.29 2286.61 C 2459.33 2318.05 2467.81 2329.29 2467.81 2368.59 C 2467.81 2392.17 2462.15 2410.14 2455.09 2406.77 C 2439.55 2398.91 2425.41 2426.99 2425.41 2467.42 C 2425.41 2511.22 2445.19 2517.96 2467.81 2480.9 C 2486.17 2449.45 2489.01 2440.46 2493.24 2385.43 C 2494.65 2367.47 2501.72 2356.23 2510.19 2360.73 C 2517.27 2364.1 2518.67 2375.33 2514.43 2384.31 C 2507.37 2400.03 2510.19 2401.16 2537.05 2388.81 C 2555.41 2382.07 2572.37 2377.57 2575.2 2380.95 C 2587.91 2391.05 2548.35 2444.96 2524.33 2450.57 C 2508.79 2453.94 2494.65 2474.16 2489.01 2497.74 C 2483.35 2521.32 2455.09 2592.08 2424.01 2657.21 C 2392.91 2722.35 2364.65 2795.35 2359 2820.05 L 2350.52 2866.1 L 2414.11 2809.95 C 2449.43 2779.63 2518.67 2715.61 2566.72 2669.57 Z M 2388.67 2607.8 C 2392.91 2598.82 2390.09 2590.95 2383.03 2590.95 C 2374.55 2590.95 2368.89 2598.82 2368.89 2607.8 C 2368.89 2616.78 2371.72 2624.64 2374.55 2624.64 C 2377.37 2624.64 2383.03 2616.78 2388.67 2607.8 Z M 2453.67 2328.16 C 2453.67 2325.91 2442.37 2316.93 2429.65 2309.07 C 2407.05 2294.47 2405.63 2295.59 2424.01 2313.55 C 2442.37 2331.53 2453.67 2337.15 2453.67 2328.16 Z" />
          <path fill={`url(#${`${gradientId}-2`})`} d="M 2610.52 2280.99 C 2610.52 2268.64 2614.76 2265.27 2619 2274.25 C 2623.24 2282.11 2621.83 2292.22 2617.58 2295.59 C 2613.35 2300.09 2609.11 2293.35 2610.52 2280.99 Z" />
          <path fill={`url(#${`${gradientId}-3`})`} d="M 1977.48 3049.16 C 2031.17 2934.6 2034.01 2789.73 1988.79 2589.83 C 1942.15 2384.31 1952.05 2369.71 2036.83 2517.96 C 2107.48 2641.49 2107.48 2641.49 2107.48 2759.41 C 2107.48 2870.59 2104.65 2881.82 2059.43 2959.32 C 2032.59 3003.11 2001.51 3046.91 1990.19 3054.77 C 1971.83 3066 1969 3064.88 1977.48 3049.16 Z" />
          <path fill={`url(#${`${gradientId}-1`})`} d="M 3099.44 2891.93 C 3030.2 2817.81 3013.24 2779.63 3007.59 2675.18 C 3003.35 2597.69 3007.59 2562.88 3024.54 2529.18 C 3057.04 2468.54 3119.22 2385.43 3127.7 2392.17 C 3130.52 2395.54 3123.46 2437.1 3110.74 2485.38 C 3076.82 2614.54 3078.24 2770.64 3114.98 2854.87 C 3130.52 2891.93 3141.82 2923.38 3139 2925.62 C 3136.18 2927.86 3119.22 2912.14 3099.44 2891.93 Z" />
          <path fill={`url(#${`${gradientId}-1`})`} d="M 1896.94 2759.41 C 1879.98 2667.32 1844.66 2603.3 1765.52 2514.58 C 1655.31 2393.3 1629.87 2325.91 1638.35 2175.42 C 1652.47 1963.17 1738.67 1793.59 1902.59 1654.34 C 1987.37 1583.58 2111.72 1512.83 2154.11 1512.83 C 2164 1512.83 2127.26 1549.89 2072.15 1594.81 C 1998.67 1653.21 1954.87 1701.5 1912.48 1770 C 1854.54 1862.09 1853.14 1867.71 1854.54 1972.15 C 1855.96 2050.77 1864.44 2097.94 1887.04 2146.22 C 1904 2183.28 1913.89 2214.73 1911.07 2218.1 C 1899.76 2227.09 1817.8 2115.9 1800.85 2068.74 C 1775.42 1999.11 1765.52 1999.11 1754.22 2070.98 C 1737.26 2187.78 1778.24 2321.43 1887.04 2501.11 C 1925.2 2566.24 1930.85 2585.34 1929.44 2669.57 C 1928.02 2787.49 1912.48 2833.53 1896.94 2759.41 Z" />
          <path fill={`url(#${`${gradientId}-3`})`} d="M 3209.65 2596.57 C 3215.31 2571.86 3243.57 2483.14 3273.24 2400.03 C 3345.31 2202.38 3363.67 2085.58 3345.31 1965.41 C 3317.05 1786.85 3239.33 1657.7 3076.82 1520.69 C 2990.63 1447.69 2986.39 1442.07 3010.41 1427.47 C 3047.16 1406.13 3099.44 1429.72 3206.83 1518.44 C 3489.44 1748.66 3571.39 2079.96 3415.96 2359.61 C 3387.7 2411.27 3242.15 2604.43 3213.89 2630.26 C 3205.41 2637 3204 2623.52 3209.65 2596.57 Z" />
          <path fill={`url(#${`${gradientId}-2`})`} d="M 2983.57 1928.35 C 2979.33 1922.74 2982.15 1917.13 2989.22 1917.13 C 2997.7 1917.13 3004.76 1922.74 3004.76 1928.35 C 3004.76 1935.09 3001.94 1939.59 2999.11 1939.59 C 2994.87 1939.59 2987.81 1935.09 2983.57 1928.35 Z" />
          <path fill={`url(#${`${gradientId}-2`})`} d="M 2113.13 1759.9 C 2137.15 1726.2 2193.68 1646.47 2237.48 1583.58 C 2312.37 1474.65 2346.28 1445.45 2370.3 1464.53 C 2412.7 1498.23 2269.98 1675.66 2114.55 1787.97 L 2067.91 1821.67 L 2113.13 1759.9 Z" />
          <path fill={`url(#${`${gradientId}-3`})`} d="M 1634.11 1609.41 C 1634.11 1581.33 1745.74 1461.17 1837.58 1392.66 C 1912.48 1335.38 1978.89 1298.32 2072.15 1261.26 C 2144.22 1233.18 2212.04 1208.48 2226.18 1208.48 C 2238.9 1207.36 2210.64 1202.86 2165.41 1197.25 C 2077.81 1187.14 2060.85 1181.53 2077.81 1168.05 C 2083.45 1162.43 2275.63 1159.07 2503.13 1159.07 C 2730.63 1159.07 2922.81 1162.43 2928.45 1168.05 C 2946.83 1182.65 2924.22 1188.26 2816.83 1195 L 2709.44 1201.74 L 2839.43 1253.4 C 2965.2 1302.82 2999.11 1330.9 2966.61 1356.72 C 2959.55 1362.34 2907.27 1353.35 2839.43 1334.26 C 2500.31 1235.44 2138.57 1278.1 1848.9 1451.05 C 1800.85 1479.13 1733.02 1529.67 1697.69 1561.12 C 1662.37 1592.56 1634.11 1615.02 1634.11 1609.41 Z" />
        </g>
      </svg>
    );

    return (
      <NoSsr
        fallback={
          <Box
            width={width}
            height={height}
            className={logoClasses.root.concat(className ? ` ${className}` : '')}
            sx={{
              flexShrink: 0,
              display: 'inline-flex',
              verticalAlign: 'middle',
              ...sx,
            }}
          />
        }
      >
        <Box
          ref={ref}
          component={RouterLink}
          href={href}
          width={width}
          height={height}
          className={logoClasses.root.concat(className ? ` ${className}` : '')}
          aria-label="logo"
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            verticalAlign: 'middle',
            ...(disableLink && { pointerEvents: 'none' }),
            ...sx,
          }}
          {...other}
        >
          {logo}
        </Box>
      </NoSsr>
    );
  }
);
