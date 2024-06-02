/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let allnft= [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,weight , age, phone_number) {
    const nft = {
        name: name,
        weight: weight,
        age:age,
        phone_number: phone_number
};
    allnft.push(nft);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    allnft.forEach((nft, index) => {
        console.log(`NFT ${index + 1}`);
        console.log("Name: " + nft.name);
        console.log("Weight: " + nft.weight);
        console.log("Age " + nft.age);
        console.log("Phone Number " + nft.phone_number);
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return allnft.length;
}

// call your functions below this line
mintNFT("Kushagar", 80, 20, 9512365478);
mintNFT("Aananya", 47, 19, 8456321458);
mintNFT("Sakshi", 55, 19, 9245865542);

listNFTs();
console.log("Total NFTs: " + getTotalSupply());
