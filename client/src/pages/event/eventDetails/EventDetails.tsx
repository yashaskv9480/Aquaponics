import { Event } from "@/components/common/eventCard/EventCards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEventDetails } from "@/hooks/eventHooks";
import { FaShare, FaTwitter } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const EventDetails: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const { eventDetails, error } = useEventDetails(slug);

  // Here we are asserting that eventDetails is of type Event | null
  const Event = eventDetails as Event | null;

  if (error) return <div>Failed to load event details</div>;

  return (
    <>
      {/* <!-- Blog Article --> */}
      <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="w-full">
          {/* <!-- Avatar Media --> */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <Avatar className="flex-shrink-0">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Profile Picture"
                />
                <AvatarFallback>{Event?.userId}</AvatarFallback>
              </Avatar>
              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    {/* <!-- Tooltip --> */}
                    <span className="font-semibold text-gray-800 dark:text-neutral-200">
                      Leyla Ludic
                    </span>
                    {/* <!-- End Tooltip --> */}

                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        Jan 18
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        8 min read
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Button Group --> */}
                  <div>
                    <Button
                      variant="default"
                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    >
                      <FaTwitter className="size-3.5" />
                      Tweet
                    </Button>
                  </div>
                  {/* <!-- End Button Group --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Avatar Media --> */}

          {/* <!-- Content --> */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold md:text-3xl dark:text-white">
                {Event?.name}
              </h1>
              {Event?.description}
            </div>
            {/* <!-- End Content --> */}
          </div>
        </div>
        {/* <!-- End Blog Article --> */}

        {/* <!-- Sticky Share Group --> */}
        <div className="sticky bottom-6 inset-x-0 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-x-1.5">
              {/* <!-- Button --> */}
              <div className="relative inline-flex">
                <Button
                  variant="default"
                  className="flex items-center text-sm rounded-full"
                >
                  Share&nbsp;
                  <FaShare className="size-3.5"/>
                </Button>
              </div>
              {/* <!-- Button --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sticky Share Group --> */}
    </>
  );
};

export default EventDetails;
