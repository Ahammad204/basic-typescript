Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

Introduction

TypeScript ব্যবহার করার মূল উদ্দেশ্য হলো type safety নিশ্চিত করা, যাতে আমরা runtime error কমাতে পারি। কিন্তু TypeScript এ কিছু type আছে যেগুলো ভুলভাবে ব্যবহার করলে এই safety পুরোপুরি নষ্ট হয়ে যায়। এর মধ্যে সবচেয়ে গুরুত্বপূর্ণ দুটি হলো any এবং unknown।


any — Type Safety Hole কেন?

any এমন একটি type যা TypeScript-এর সব rules উপেক্ষা করে।


let data: any = "Hello";

data = 42;
data.toUpperCase(); 


 এখানে TypeScript কোনো error দেয় না
 কিন্তু runtime-এ crash হবে


কেন "Type Safety Hole"?

কারণ:

1.TypeScript check করা বন্ধ করে দেয়
2.ভুল type ব্যবহার করলেও error দেখায় না
3.Bugs detect করা কঠিন হয়ে যায়


unknown — Safe Alternative

unknown দেখতে any এর মতো হলেও behavior সম্পূর্ণ আলাদা।


let data: unknown = "Hello";
data.toUpperCase(); 


TypeScript এখানে error দেবে
কারণ এইখানে string type define করা নাই।



কেন unknown নিরাপদ?

কারণ:

1.সরাসরি ব্যবহার করতে দেয় না
2.আগে type check করতে বাধ্য করে
3.runtime error prevent করে



 Type Narrowing

Type narrowing মানে হলো: একটি broad type  থেকে specific type নির্ধারণ করা



let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}


এখানে typeof ব্যবহার করে আমরা বললাম:

data আসলে string

এরপর TypeScript allow করলো




Conclusion

1.any TypeScript-এর safety ভেঙে দেয় → তাই "type safety hole"
2 unknown  বাধ্য করে safe code লিখতে
3.Type narrowing হলো safe coding-এর key concept


