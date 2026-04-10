import os

def search_care(directory):
    matches = []
    # Extensiones de archivo a omitir (binarios, git, etc)
    skip_ext = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.pdf', '.zip', '.exe'}
    skip_dirs = {'.git', 'node_modules', '.gemini'}

    for root, dirs, files in os.walk(directory):
        # Omitir carpetas ocultas o pesadas
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if any(file.lower().endswith(ext) for ext in skip_ext):
                continue
                
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    if 'CARE' in content.upper():
                        matches.append(file_path)
            except Exception as e:
                pass
    return matches

if __name__ == "__main__":
    current_dir = os.getcwd()
    print(f"Buscando 'CARE' en: {current_dir}\n")
    results = search_care(current_dir)
    if results:
        print("Archivos encontrados:")
        for r in results:
            print(f"- {r}")
    else:
        print("No se encontraron coincidencias.")
