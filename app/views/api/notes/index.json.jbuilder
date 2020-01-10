#Fix syntax so object. Id as key and value as object. Look up JSON.set

@notes.each do |note|
  json.set! note.id do 
    json.partial! "api/notes/note", note: note
  end
end