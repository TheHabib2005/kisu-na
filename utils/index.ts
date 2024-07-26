// import CryptoJS from "crypto-js";

export const delay = async (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const secretKey = "YourSecretKey123"; // Replace with your actual secret key

// export function encryptObject(obj: Object) {
//   const jsonString = JSON.stringify(obj);
//   return CryptoJS.AES.encrypt(jsonString, secretKey).toString();
// }

// export function decryptObject(encryptedString: string) {
//   const bytes = CryptoJS.AES.decrypt(encryptedString, secretKey);
//   const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
//   return JSON.parse(decryptedData);
// }

export function calculateDiscountedPrice<T extends number>(
  originalPrice: T,
  discountPercentage: T
): number {
  // Convert both inputs to numbers
  const originalPriceNumber =
    typeof originalPrice === "string"
      ? parseFloat(originalPrice)
      : originalPrice;
  const discountPercentageNumber =
    typeof discountPercentage === "string"
      ? parseFloat(discountPercentage)
      : discountPercentage;

  // Ensure valid numbers are provided
  if (isNaN(originalPriceNumber) || isNaN(discountPercentageNumber)) {
    throw new Error(
      "Invalid input: both original price and discount percentage must be valid numbers or numeric strings."
    );
  }

  // Calculate the discount amount
  const discountAmount = (originalPriceNumber * discountPercentageNumber) / 100;
  const discountedPrice = originalPriceNumber - discountAmount;

  // Return the discounted price
  return discountedPrice;
}

export const updateCartdb = (data: any) => {
  console.log("data update", data);
};

// let number = 1900;
// let formattedNumber = number.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

// console.log(formattedNumber); // Outputs: $1,900.00

export const formatePrice = (price: number): string => {
  let formattedNumber = price.toLocaleString("en-US");
  return formattedNumber;
};

export const fetchProduct = async () => {
  let response = await fetch(`http://localhost:8000/products/data`, {
    cache: "force-cache",
    // next:{revalidate:5}
  });
  let result = await response.json();
  return result;
};
