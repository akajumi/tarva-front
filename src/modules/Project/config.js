const config = {
  id: 'jumi',
  viewports: [
    {
      label: 'phone',
      width: 480,
      height: 600
    },
    {
      label: 'tablet-portrair',
      width: 768,
      height: 1024
    },
    {
      label: 'tablet-landscape',
      width: 1024,
      height: 768
    },
    {
      label: 'desktop',
      width: 1280,
      height: 800
    }
  ],
  scenarios: [
    {
      label: 'Demo',
      cookiePath: 'projects/jumi/backstop_data/engine_scripts/cookies.json',
      url: 'https://www.adimedia.net/',
      referenceUrl: '',
      hideSelectors: [],
      removeSelectors: [],
      selectors: ['document'],
      selectorExpansion: true,
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    }
  ],
  paths: {
    bitmaps_reference: 'data/jumi/backstop_data/bitmaps_reference',
    bitmaps_test: 'data/jumi/backstop_data/bitmaps_test',
    engine_scripts: 'data/jumi/backstop_data/engine_scripts',
    html_report: 'data/jumi/backstop_data/html_report',
    ci_report: 'data/jumi/backstop_data/ci_report'
  },
  report: ['browser', 'CI'],
  engine: 'chrome',
  engineFlags: [],
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}

export default config
