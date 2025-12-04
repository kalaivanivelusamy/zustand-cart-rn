# 🛒 Zustand Cart - React Native

A modern shopping cart application built with React Native, Expo, and Zustand for state management. Features persistent cart storage using MMKV for lightning-fast performance.

## ✨ Features

- 🎯 **Simple Shopping Cart**: Add and remove items with real-time quantity updates
- 💾 **Persistent Storage**: Cart data persists across app restarts using MMKV
- ⚡ **Fast State Management**: Powered by Zustand for minimal re-renders and optimal performance
- 📱 **Cross-Platform**: Works on iOS, Android, and Web
- 🎨 **Clean UI**: Intuitive interface with tab navigation
- 🔢 **Quantity Management**: Increase or decrease item quantities with ease

## 🛠️ Tech Stack

- **[React Native](https://reactnative.dev/)** (0.81.5) - Cross-platform mobile framework
- **[Expo](https://expo.dev/)** (~54.0.25) - React Native development platform
- **[Zustand](https://github.com/pmndrs/zustand)** (^5.0.9) - Lightweight state management
- **[MMKV](https://github.com/mrousavy/react-native-mmkv)** (^4.0.1) - Ultra-fast key-value storage
- **[Expo Router](https://expo.github.io/router/)** (~6.0.15) - File-based routing
- **[React Navigation](https://reactnavigation.org/)** - Bottom tabs navigation

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development on macOS)
- Android Studio (for Android development)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kalaivanivelusamy/zustand-cart-rn.git
   cd zustand-cart-rn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Running the App

- **iOS**: Press `i` in the terminal or run `npm run ios`
- **Android**: Press `a` in the terminal or run `npm run android`
- **Web**: Press `w` in the terminal or run `npm run web`

## 📁 Project Structure

```
zustand-cart-rn/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.js          # Tab navigation layout
│   │   ├── index.js            # Home screen (product list)
│   │   └── cart.js             # Cart screen
│   ├── store/
│   │   ├── cartStore.js        # Zustand cart store
│   │   └── mmkv.js             # MMKV storage configuration
│   └── _layout.js              # Root layout
├── data/
│   └── data.json               # Product data
├── assets/
│   └── images/                 # App images
├── android/                    # Android native code
├── ios/                        # iOS native code
└── package.json
```

## 🎯 Key Features Implementation

### State Management with Zustand

The app uses Zustand for simple and efficient state management:

```javascript
// cartStore.js
- addToCart: Add items or increase quantity
- removeFromCart: Decrease quantity or remove items
- clearCart: Empty the cart
- cart: Array of cart items
- itemsCount: Total number of items
```

### Persistent Storage with MMKV

Cart data is automatically persisted using MMKV, which provides:
- Synchronous storage operations
- Fast read/write performance
- Cross-platform support
- Automatic data persistence

### Product Data

The app uses a JSON file (`data/data.json`) containing product information from Fake Store API, including:
- Product ID, title, and description
- Price and category
- Product images
- Ratings

## 🎨 Screens

1. **Home Screen** (`index.js`)
   - Displays all available products
   - Add/remove items to/from cart
   - Shows current quantity for each item

2. **Cart Screen** (`cart.js`)
   - Shows all items in the cart
   - Manage quantities
   - View cart contents

## 🔧 Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web browser
npm run lint       # Run ESLint
```

## 📦 Dependencies

### Main Dependencies
- `react-native-mmkv`: High-performance key-value storage
- `zustand`: State management library
- `expo-router`: File-based routing for Expo
- `@react-navigation/bottom-tabs`: Tab navigation
- `@expo/vector-icons`: Icon library

### Dev Dependencies
- `typescript`: TypeScript support
- `eslint`: Code linting
- `eslint-config-expo`: Expo ESLint configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kalaivani Velusamy**
- GitHub: [@kalaivanivelusamy](https://github.com/kalaivanivelusamy)

## 🙏 Acknowledgments

- Product data from [Fake Store API](https://fakestoreapi.com/)
- Built with [Expo](https://expo.dev/)
- State management by [Zustand](https://github.com/pmndrs/zustand)
- Storage powered by [MMKV](https://github.com/mrousavy/react-native-mmkv)

---

Made with ❤️ using React Native and Expo
# zustand-cart-rn
