import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const detailPage = ({ user, logout, transcript }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug++", slug);
  console.log("transcript+++", transcript);

  return (
    <div className=" min-h-screen">
      <Navbar user={user} logout={logout} />
      <div className="w-[80%] bg-[#ffffff36] m-auto rounded-xl mt-20 mb-20">
        <div className="flex flex-col items-start justify-center p-4">
          <div className="font-bold text-4xl py-2">
            UPSC Civil Services Examination, 2024
          </div>
          <div className="font-bold text-2xl py-2">
            ~ UPSC Interview Transcript By Divyanshu Jha Board Venkatrami Reddy
          </div>
        </div>
        <hr className="w-[90%] border-solid border-1 border-white mx-4 my-8" />
        <div className="flex flex-col items-center justify-center p-4">
          <div className="">
            <span className="text-xl font-bold">Ques : </span>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              perferendis aperiam, ex iusto ratione, dolores corporis explicabo
              adipisci velit maiores assumenda dolore doloremque quibusdam?
              Consectetur ea quisquam repellat ratione corrupti ipsam autem
              soluta et sint quia? Illo officia quia voluptatem consectetur
              fugiat.
            </span>
          </div>
          <div className="">
            <span className="text-xl font-bold">Ans : </span>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              perferendis aperiam, ex iusto ratione, dolores corporis explicabo
              adipisci velit maiores assumenda dolore doloremque quibusdam?
              Consectetur ea quisquam repellat ratione corrupti ipsam autem
              soluta et sint quia? Illo officia quia voluptatem consectetur
              fugiat.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="">
            <span className="text-lg font-bold">Ques : </span>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              perferendis aperiam, ex iusto ratione, dolores corporis explicabo
              adipisci velit maiores assumenda dolore doloremque quibusdam?
              Consectetur ea quisquam repellat ratione corrupti ipsam autem
              soluta et sint quia? Illo officia quia voluptatem consectetur
              fugiat.
            </span>
          </div>
          <div className="">
            <span className="text-lg font-bold">Ans : </span>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              perferendis aperiam, ex iusto ratione, dolores corporis explicabo
              adipisci velit maiores assumenda dolore doloremque quibusdam?
              Consectetur ea quisquam repellat ratione corrupti ipsam autem
              soluta et sint quia? Illo officia quia voluptatem consectetur
              fugiat.
            </span>
          </div>
        </div>
        <hr className="w-[90%] border-solid border-1 border-white mx-4 my-8" />
        <div className="flex flex-col items-start justify-center p-4">
          <p className="text-2xl font-bold py-2">My Experience</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sint sequi praesentium iusto, reprehenderit aspernatur ad earum.
            Molestiae commodi in accusamus eos, ut earum fuga expedita officia?
            Odit praesentium quas impedit odio deleniti? Exercitationem est
            cupiditate deleniti quisquam necessitatibus deserunt beatae dolores
            accusantium. Asperiores, aperiam laudantium. Sit accusantium hic
            unde. Quaerat quae voluptatum maxime totam tempore, deserunt, atque
            porro excepturi illo architecto, placeat ad? Quo, inventore.
            Doloribus eos commodi placeat aperiam sapiente, accusamus culpa
            distinctio! Eveniet, ipsum eum itaque culpa minus non nostrum
            architecto consequatur quaerat quo libero aliquid, in odio
            blanditiis! Voluptatem asperiores tempora voluptates temporibus est
            amet consequatur?
          </p>
        </div>
        <hr className="w-[90%] border-solid border-1 border-white mx-4 my-8" />
        <div className="flex flex-col items-start justify-center p-4">
          <p className="text-2xl font-bold py-2">Tips & Suggestions</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sint sequi praesentium iusto, reprehenderit aspernatur ad earum.
            Molestiae commodi in accusamus eos, ut earum fuga expedita officia?
            Odit praesentium quas impedit odio deleniti? Exercitationem est
            cupiditate deleniti quisquam necessitatibus deserunt beatae dolores
            accusantium. Asperiores, aperiam laudantium. Sit accusantium hic
            unde. Quaerat quae voluptatum maxime totam tempore, deserunt, atque
            porro excepturi illo architecto, placeat ad? Quo, inventore.
            Doloribus eos commodi placeat aperiam sapiente, accusamus culpa
            distinctio! Eveniet, ipsum eum itaque culpa minus non nostrum
            architecto consequatur quaerat quo libero aliquid, in odio
            blanditiis! Voluptatem asperiores tempora voluptates temporibus est
            amet consequatur?
          </p>
        </div>
        <hr className="w-[90%] border-solid border-1 border-white mx-4 my-8" />
        <div className="flex flex-col items-start justify-center p-4">
          <p className="text-2xl font-bold py-2">Some Info About User</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sint sequi praesentium iusto, reprehenderit aspernatur ad earum.
            Molestiae commodi in accusamus eos, ut earum fuga expedita officia?
            Odit praesentium quas impedit odio deleniti? Exercitationem est
            cupiditate deleniti quisquam necessitatibus deserunt beatae dolores
            accusantium. Asperiores, aperiam laudantium. Sit accusantium hic
            unde. Quaerat quae voluptatum maxime totam tempore, deserunt, atque
            porro excepturi illo architecto, placeat ad? Quo, inventore.
            Doloribus eos commodi placeat aperiam sapiente, accusamus culpa
            distinctio! Eveniet, ipsum eum itaque culpa minus non nostrum
            architecto consequatur quaerat quo libero aliquid, in odio
            blanditiis! Voluptatem asperiores tempora voluptates temporibus est
            amet consequatur?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default detailPage;

export async function getServerSideProps(context) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/transcripts/get_transcript_by_url_slug`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category_slug: context.query.slug,
      }),
    }
  );
  console.log("response+++", response);
  let transcript = {};
  if (response.status == 200) {
    transcript = await response.json();
  }
  console.log("transcript+++", transcript);
  return {
    props: { transcript: transcript },
  };
}
