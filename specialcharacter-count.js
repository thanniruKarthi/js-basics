let x=`Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the "small" ideas of individual sentences to a "bigger" idea, paragraph structure is essential to any writing for organization, flow, and comprehension. Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples.`
let str=`/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/`;
let i=0;
let count=0;
for(i=0;i<x.length;i++)
{
    if(!str.includes(x[i]))
    {
        continue;
    }
    else
    {
        count++;
    }
}
console.log(count);
