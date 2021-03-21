// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
	purge: {
    enabled: false,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
	theme: {
		screens: {
			xs:'320px',
			sm: '768px',
			md: '960px',
			lg: '1140px',
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: '#000000',
				white: '#FFFFFF',
				green: {
					100: '#8fb148',
					200: '#78885A',
					300: '#f4fce8'
				},
				yellow: {
					100:'#ffe582',
					200:'#ffd235'
				},
				blue: {
					100:'#f4f5f7',
					200: '#252f3f',
					300: '#161d2e'
				},
				brown:{
					100: '#6b5b45',
					200: '#a18764'
				},
				gray: {
					100: '#9b9b9b',
					200: '#1e2022',
					300: '#C9D6DF',
					400: '#f0f5f9',
					500: '#eeeeee',
					600: '#cccccc',
					700: '#333333'
				},
				ui: {
					'info': '#0055de',
					'success': '#88AC42',
					'error': '#F03939'
				}
			},
			placeholderColor: theme => theme('colors'),
			textColor: theme => theme('colors'),
			opacity: {
				'0': '0',
				'20': '0.2',
				'30': '0.3',
				'40': '0.4',
				'50': '0.5',
				'70': '0.7',
				'80': '0.8',
				'100': '1',
			},
			backgroundColor: theme => theme('colors'),
			backgroundOpacity: theme => theme('opacity'),
			backgroundPosition: {
				bottom: 'bottom',
				center: 'center',
				left: 'left',
				'left-bottom': 'left bottom',
				'left-top': 'left top',
				right: 'right',
				'right-bottom': 'right bottom',
				'right-top': 'right top',
				top: 'top',
			},
			backgroundSize: {
				auto: 'auto',
				cover: 'cover',
				contain: 'contain',
			},
			borderColor: theme => theme('colors'),
			borderRadius: {
				none: '0',
				default: '0.25rem',
				sm: '0.5rem'
			},
			borderWidth: {
				default: '1px',
				'0': '0',
				'2': '2px',
				'4': '4px'
			},
			fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],           
              },
			fontSize: {
				'8': '0.5rem',
				'10': '0.625rem',
				'12': '0.75rem',
				'14': '0.875rem',
				'15': '0.9375rem',
				'16': '1rem',
				'18': '1.125rem',
				'20': '1.25rem',
				'22': '1.375rem',
				'24': '1.5rem',
				'26': '1.625rem',
				'28': '1.75rem',
				'30': '1.875rem',
				'32': '2rem',
				'36': '2.25rem',
				'42': '2.625rem',
				'48': '3rem',
				'68': '4.25rem',
				'80': '5rem',
				'100': '6.25rem',
				'120': '7.5rem',
				'150': '9.375rem'
			},
			lineHeight: {
				'100': '1',
				'125': '1.25',
				'130': '1.3',
				'144': '1.44',
				'164': '1.64',
				'175': '1.75',
				'190': '1.9'
			},
			fontWeight: {
				normal: '400',
				semibold: '600',
				bold: '700'
			},
			letterSpacing: {
				tight: '-0.5px',
				normal: '0'
			},
			spacing: {
				px: '1px',
				'0': '0',
				'05': '0.125rem',
				'1': '0.25rem',
				'2': '0.5rem',
				'3': '0.75rem',
				'4': '1rem',
				'5': '1.25rem',
				'6': '1.5rem',
				'8': '2rem',
				'10': '2.5rem',
				'12': '3rem',
				'14': '3.5rem',
				'16': '4rem',
				'20': '5rem',
				'24': '6rem',
				'32': '8rem',
				'36': '9rem',
				'40': '10rem',
				'48': '12rem',
				'56': '14rem',
				'64': '16rem',
				'72': '18rem',
				'80': '20rem'
			},
			margin: (theme, {negative}) => ({
				auto: 'auto',
				...theme('spacing'),
				...theme('width'),
				...negative(theme('spacing')),
			}),
			padding: (theme, {negative}) => ({
				auto: 'auto',
				...theme('spacing'),
				...theme('width'),
				...negative(theme('spacing')),
			}),

			width: theme => ({
				auto: 'auto',
                '1/12': '8.333333333%',
                '2/12': '16.66666667%',
                '3/12': '25%',
                '4/12': '33.33333333%',
                '5/12': '41.66666667%',
                '6/12': '50%',
                '7/12': '58.33333333%',
                '8/12': '66.66666667%',
                '9/12': '75%',
                '3/4': '75vh',
                '10/12': '83.33333333%',
                '11/12': '91.66666667%',
                '12/12': '100%',
                '16/9': '56.25%',
                '26/19': '73%',
                full: '100%',
                screen: '100vw',
				half: '50%',
				inherit: 'inherit'
			}),
			height: {
				full: '100%',
				half: '50%',
				'3/4': '75vh',
				screen: '100vh',
				'screen-60': '60vh',

			},
			maxHeight: {
				full: '100%',
				half: '50%',
				'3/4': '75vh',
				quarter: '25%',
				third: '33.3333%',
				screen: '100vh',
			},
			minHeight: {
				'0': '0',
				full: '100%',
				half: '50%',
				'3/4': '75vh',
				quarter: '25%',
				third: '33.3333%',
				screen: '100vh',
			},
			minWidth: {
				'0': '0',
				full: '100%',
				half: '50%',
				quarter: '25%',
				third: '33.3333%',
			},
			maxWidth: theme => theme('width'),
			boxShadow: {
				default: '0px 4px 8px 0px rgba(140, 140, 140, 0.1)',
				none: 'none',
			},
			flexGrow: {
				'0': '0',
				default: '1',
			},
			flexShrink: {
				'0': '0',
				default: '1',
			},
			zIndex: {
				auto: 'auto',
				'0': '0',
				'10': '10',
				'20': '20',
				'30': '30',
				'40': '40',
				'50': '50',
				'100': '100',
			},
			inset: (theme, {negative}) => ({
				'0': '0',
				'25': '25%',
				'50': '50%',
				'75': '70%',
				'100': '100%',
				...theme('spacing'),
				...negative(theme('spacing'))
			})
		},
	},
	variants: {
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		borderColor: ['hover', 'focus', 'active'],
		borderRadius: ['hover', 'focus', 'active'],
		boxShadow: ['responsive', 'hover', 'focus'],
		display: ['responsive'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		fontSize: ['responsive'],
		height: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		margin: ['responsive'],
		inset: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		padding: ['responsive'],
		position: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'hover', 'focus'],
		width: ['responsive'],
		cursor: ['responsive', 'hover']
	},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
};