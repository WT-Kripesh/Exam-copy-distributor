call cd ..\\frontend

call npm run build

call xcopy /E /H /YS build\\* ..\\public\\

call cd ..\\build_scripts