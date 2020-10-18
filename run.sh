echo "{\"files\":["
find . -not -path '*/\.*' | while read -r line ; do
echo  "\t\"$line\","
    # your code goes here
done
echo "]}"
