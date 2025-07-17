# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Firebase
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.firebase.**
-dontwarn com.google.android.gms.**

# OkHttp
-keepattributes Signature
-keepattributes *Annotation*
-keep class okhttp3.** { *; }
-keep interface okhttp3.** { *; }
-dontwarn okhttp3.**

# Retrofit
-keep class retrofit2.** { *; }
-dontwarn retrofit2.**

# Gson
-keep class com.google.gson.** { *; }
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer

# React Native Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# React Native Image Picker
-keep class com.imagepicker.** { *; }

# React Native Keychain
-keep class com.oblador.keychain.** { *; }

# React Native Biometrics
-keep class com.rnbiometrics.** { *; }

# React Native Maps
-keep class com.airbnb.android.react.maps.** { *; }

# React Native Permissions
-keep class com.zoontek.rnpermissions.** { *; }

# React Native Async Storage
-keep class com.reactnativecommunity.asyncstorage.** { *; }

# React Native NetInfo
-keep class com.reactnativecommunity.netinfo.** { *; }

# React Native Device Info
-keep class com.learnium.RNDeviceInfo.** { *; }

# React Native Reanimated
-keep class com.swmansion.reanimated.** { *; }

# React Native Gesture Handler
-keep class com.swmansion.gesturehandler.** { *; }

# React Native SVG
-keep class com.horcrux.svg.** { *; }

# React Native Video
-keep class com.brentvatne.react.** { *; }

# React Native WebView
-keep class com.reactnativecommunity.webview.** { *; }

# React Native Fast Image
-keep class com.dylanvann.fastimage.** { *; }

# React Native Share
-keep class cl.json.** { *; }

# React Native In App Purchase
-keep class com.dooboolab.** { *; }

# React Native Push Notification
-keep class com.dieam.reactnativepushnotification.** { *; }

# React Native Location
-keep class com.github.douglasjunior.reactNativeGetLocation.** { *; }

# React Native Linear Gradient
-keep class com.BV.LinearGradient.** { *; }

# React Native Modal
-keep class com.reactnativecommunity.rnmodal.** { *; }

# React Native Animatable
-keep class com.oblador.vectoricons.** { *; }

# React Native Super Grid
-keep class com.supergridsectionlist.** { *; }

# React Native Snap Carousel
-keep class com.archriss.** { *; }

# React Native Progress
-keep class com.oblador.vectoricons.** { *; }

# React Native Skeleton Placeholder
-keep class com.reactnativecommunity.** { *; }

# React Native Toast Message
-keep class com.calendarevents.** { *; }

# React Native Date Picker
-keep class com.henninghall.date_picker.** { *; }

# React Native Image Crop Picker
-keep class com.reactnative.ivpusic.imagepicker.** { *; }

# React Native Document Picker
-keep class io.github.elyx0.reactnativedocumentpicker.** { *; }

# React Native File Viewer
-keep class com.vinzscam.reactnativefileviewer.** { *; }

# React Native Background Timer
-keep class com.ocetnik.timer.** { *; }

# React Native App State
-keep class info.moonjava.react.** { *; }

# React Native Orientation Locker
-keep class org.wonday.orientation.** { *; }

# React Native Splash Screen
-keep class org.devio.rn.splashscreen.** { *; }

# React Native Code Push
-keep class com.microsoft.codepush.** { *; }

# React Native Flipper
-keep class com.facebook.flipper.** { *; }

# Keep model classes
-keep class com.flourish.relationshipapp.models.** { *; }

# Keep native methods
-keepclasseswithmembernames class * {
    native <methods>;
}

# Keep enums
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# Keep Parcelable classes
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Keep Serializable classes
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# Remove logging
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int i(...);
    public static int w(...);
    public static int d(...);
    public static int e(...);
}