import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dispatch, SetStateAction, useState } from "react";

export function LegalAgeAlert({
    limit,
    SetLimit,
}: {
    limit: boolean;
    SetLimit: Dispatch<SetStateAction<boolean>>;
}) {
    const [open, setOpen] = useState(!limit);
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-[50px]">
                        Вам есть 18?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[11px]">
                        Некоторые товары можем показать только совершеннолетним
                        ООО «МАРКЕТПЛЕЙС» не является продавцом алкогольной
                        продукции и не осуществляет её доставку. В данном
                        каталоге размещена только справочная информация, которая
                        даёт возможность пользователям сайта ознакомиться с
                        ассортиментом алкогольной продукции, представленном на
                        рынке. Данная информация предназначена только для лиц,
                        достигших 18 лет. Приобретение и оплата представленной в
                        данном каталоге алкогольной продукции возможны только по
                        указанному месту нахождения торгового объекта,
                        обладающего лицензией на розничную продажу алкогольной
                        продукции.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-1">
                    <AlertDialogCancel
                        onClick={() => {
                            SetLimit(false);
                            setOpen(false);
                            console.log(limit);
                        }}
                    >
                        Нет, я младше
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => {
                            SetLimit(true);
                        }}
                    >
                        Да, мне есть 18 лет
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
