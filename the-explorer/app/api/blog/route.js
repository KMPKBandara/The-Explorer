import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

//API Endpoint to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchparams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

//API Endpoint for Uploading Blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  if (!image) {
    return NextResponse.json({ success: false, msg: "image is missing" });
  }

  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added" });
}

/*import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(request) {
  try {
    // ✅ Ensure DB is connected
    await ConnectDB();

    // ✅ Get form data
    const formData = await request.formData();

    // ✅ Validate Image
    const image = formData.get("image");
    if (!image) {
      return NextResponse.json(
        { success: false, msg: "Image is missing" },
        { status: 400 }
      );
    }

    // ✅ Convert image to buffer & save
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const timestamp = Date.now();
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    // ✅ Create Blog Data
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    // ✅ Save to Database
    const blog = await BlogModel.create(blogData);
    console.log("Blog Saved:", blog);

    return NextResponse.json({ success: true, msg: "Blog Added", blog });
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json(
      { success: false, msg: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}*/
