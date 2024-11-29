
# Welcome to the Project!

Hello, I'm **Nishan** and welcome to this project! Let's get started with setting up and customizing the app.

## Step 1: Clone the Repository

After cloning the repository, follow these steps to set up and run the app.

### 1.1 Install Dependencies

First, navigate to the app directory:

```bash
cd app
```

Then, install the dependencies by running the following command:

```bash
npm install
```

### 1.2 Start the App

Once the dependencies are installed, you can power up the app using the following command:

```bash
npx expo start
```

This will start the Expo development server, and you'll be able to view the app on your device or emulator.

---

## What You Get

In this template, you'll find a **pre-configured layout** that includes the following:

1. **Landing Page**: The first screen that appears when the app starts.
2. **Main App Screen**: The second screen, which serves as the home page.
3. **Bottom Navigation Bar**: A navigation bar at the bottom of the home page, allowing easy navigation between different screens.

---

## Customizing the App

### 2.1 Customizing the Landing Page

To customize the **Landing Page**, navigate to the `landingpage.tsx` file in the **app directory**.

#### Steps to customize the landing page:

1. Open `landingpage.tsx`.
2. Modify the existing code to match your preferred design and content.
3. Save the file, and your changes will automatically be reflected when you reload the app.

---

### 2.2 Customizing the Bottom Navigation Bar

The **Bottom Navigation Bar** is part of the main app screen. To customize the navigation bar, you can add, remove, or reorder items.

#### Steps to customize the bottom navbar:

1. In the **app directory**, navigate to the `(tab)` folder. 
2. For each new tab item, create a new file inside the `(tab)` folder. Ensure the filename is descriptive of the tab’s content.
   
   For example:
   - Create a new file `newTabScreen.tsx` for the new tab item.

3. Open the **_layout.tsx** file inside the `(tab)` folder, which is responsible for defining the tabs.

4. Add a new item to the navigation bar by inserting the following code:

   ```tsx
   <Tabs.Screen 
     name="newTabScreen.tsx" 
     options={{ title: "Custom Tab Title" }} 
   />
   ```

   - **name**: The name of the tab screen (corresponding to the file name).
   - **title**: The label that will appear on the tab.

5. You can reorder the items simply by changing their order in the `_layout.tsx` file.

---

## Example

Let's say you created a new tab called `profileTab.tsx` in the `(tab)` folder. To add it to the bottom navigation bar, you would:

1. Create `profileTab.tsx` in the `(tab)` folder.
2. Open `_layout.tsx` inside the same folder.
3. Add the following code to include it in the bottom nav:

   ```tsx
   <Tabs.Screen 
     name="profileTab.tsx" 
     options={{ title: "Profile" }} 
   />
   ```

### 2.3 Removing a Tab

To remove a tab, simply delete or comment out the corresponding `<Tabs.Screen />` entry from the `_layout.tsx` file.

---

## Conclusion

Congratulations! You've successfully customized your app's landing page and bottom navigation bar.

Feel free to continue modifying the app to suit your needs, such as adding new screens, customizing the styles, or tweaking navigation options.

If you need further assistance or want to dive deeper into React Native or Expo, feel free to explore the [official documentation](https://docs.expo.dev/) or reach out to the community.

Happy coding!
