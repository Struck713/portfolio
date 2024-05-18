import { URL } from "@/app/config";
import { Icon, IconGithub, IconLinkedIn } from "./Icons";

export default () => {
    return (
        <div className="w-full pt-24">
            <div className="bg-primary py-5 px-5 md:px-40 lg:px-60">
               <div className="flex flex-row justify-between"> 
                    <p>&copy; {new Date().getFullYear()} Noah Struck</p>
                    <div className="flex flex-row gap-3">
                        <Icon href={URL.Github} target="_blank" icon={<IconGithub />} />
                        <Icon href={URL.LinkedIn} target="_blank" icon={<IconLinkedIn />} />
                    </div>
               </div>
            </div>
        </div>
    );
}