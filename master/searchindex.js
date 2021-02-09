Search.setIndex({docnames:["data","data_functional","data_metrics","data_utils","datasets","examples","experimental_datasets","experimental_transforms","experimental_vectors","experimental_vocab","index","nn_modules","utils","vocab"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["data.rst","data_functional.rst","data_metrics.rst","data_utils.rst","datasets.rst","examples.rst","experimental_datasets.rst","experimental_transforms.rst","experimental_vectors.rst","experimental_vocab.rst","index.rst","nn_modules.rst","utils.rst","vocab.rst"],objects:{"":{torchtext:[10,0,0,"-"]},"torchtext.data":{BPTTIterator:[0,1,1,""],Batch:[0,1,1,""],BucketIterator:[0,1,1,""],Dataset:[0,1,1,""],Example:[0,1,1,""],Field:[0,1,1,""],Iterator:[0,1,1,""],NestedField:[0,1,1,""],Pipeline:[0,1,1,""],RawField:[0,1,1,""],ReversibleField:[0,1,1,""],SubwordField:[0,1,1,""],TabularDataset:[0,1,1,""],batch:[0,4,1,""],functional:[1,0,0,"-"],get_tokenizer:[0,4,1,""],interleave_keys:[0,4,1,""],metrics:[2,0,0,"-"],pool:[0,4,1,""],utils:[3,0,0,"-"]},"torchtext.data.BPTTIterator":{__init__:[0,2,1,""]},"torchtext.data.Batch":{__init__:[0,2,1,""],fromvars:[0,2,1,""]},"torchtext.data.Dataset":{__init__:[0,2,1,""],download:[0,2,1,""],filter_examples:[0,2,1,""],split:[0,2,1,""],splits:[0,2,1,""]},"torchtext.data.Example":{fromCSV:[0,2,1,""],fromJSON:[0,2,1,""],fromdict:[0,2,1,""],fromlist:[0,2,1,""],fromtree:[0,2,1,""]},"torchtext.data.Field":{__init__:[0,2,1,""],build_vocab:[0,2,1,""],numericalize:[0,2,1,""],pad:[0,2,1,""],preprocess:[0,2,1,""],process:[0,2,1,""],vocab_cls:[0,3,1,""]},"torchtext.data.Iterator":{__init__:[0,2,1,""],data:[0,2,1,""],init_epoch:[0,2,1,""],splits:[0,2,1,""]},"torchtext.data.NestedField":{__init__:[0,2,1,""],build_vocab:[0,2,1,""],numericalize:[0,2,1,""],pad:[0,2,1,""],preprocess:[0,2,1,""]},"torchtext.data.Pipeline":{__init__:[0,2,1,""],add_after:[0,2,1,""],add_before:[0,2,1,""],call:[0,2,1,""],identity:[0,2,1,""]},"torchtext.data.RawField":{__init__:[0,2,1,""],preprocess:[0,2,1,""],process:[0,2,1,""]},"torchtext.data.ReversibleField":{__init__:[0,2,1,""]},"torchtext.data.SubwordField":{__init__:[0,2,1,""],segment:[0,2,1,""],vocab_cls:[0,3,1,""]},"torchtext.data.TabularDataset":{__init__:[0,2,1,""]},"torchtext.data.functional":{custom_replace:[1,4,1,""],generate_sp_model:[1,4,1,""],load_sp_model:[1,4,1,""],numericalize_tokens_from_iterator:[1,4,1,""],sentencepiece_numericalizer:[1,4,1,""],sentencepiece_tokenizer:[1,4,1,""],simple_space_split:[1,4,1,""]},"torchtext.data.metrics":{bleu_score:[2,4,1,""]},"torchtext.data.utils":{get_tokenizer:[3,4,1,""],ngrams_iterator:[3,4,1,""]},"torchtext.datasets":{AG_NEWS:[4,4,1,""],AmazonReviewFull:[4,4,1,""],AmazonReviewPolarity:[4,4,1,""],BABI20:[4,1,1,""],CoNLL2000Chunking:[4,1,1,""],DBpedia:[4,4,1,""],EnWik9:[4,1,1,""],IMDB:[4,1,1,""],IWSLT:[4,1,1,""],LanguageModelingDataset:[4,1,1,""],Multi30k:[4,1,1,""],MultiNLI:[4,1,1,""],PennTreebank:[4,1,1,""],SNLI:[4,1,1,""],SST:[4,1,1,""],SequenceTaggingDataset:[4,1,1,""],SogouNews:[4,4,1,""],TREC:[4,1,1,""],TextClassificationDataset:[4,1,1,""],TranslationDataset:[4,1,1,""],UDPOS:[4,1,1,""],WMT14:[4,1,1,""],WikiText103:[4,1,1,""],WikiText2:[4,1,1,""],YahooAnswers:[4,4,1,""],YelpReviewFull:[4,4,1,""],YelpReviewPolarity:[4,4,1,""]},"torchtext.datasets.BABI20":{__init__:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.CoNLL2000Chunking":{splits:[4,2,1,""]},"torchtext.datasets.EnWik9":{__init__:[4,2,1,""]},"torchtext.datasets.IMDB":{__init__:[4,2,1,""],iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.IWSLT":{splits:[4,2,1,""]},"torchtext.datasets.LanguageModelingDataset":{__init__:[4,2,1,""]},"torchtext.datasets.Multi30k":{splits:[4,2,1,""]},"torchtext.datasets.MultiNLI":{iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.PennTreebank":{iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.SNLI":{iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.SST":{__init__:[4,2,1,""],iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.SequenceTaggingDataset":{__init__:[4,2,1,""]},"torchtext.datasets.TREC":{iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.TextClassificationDataset":{__init__:[4,2,1,""]},"torchtext.datasets.TranslationDataset":{__init__:[4,2,1,""]},"torchtext.datasets.UDPOS":{splits:[4,2,1,""]},"torchtext.datasets.WMT14":{splits:[4,2,1,""]},"torchtext.datasets.WikiText103":{iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.datasets.WikiText2":{iters:[4,2,1,""],splits:[4,2,1,""]},"torchtext.experimental":{transforms:[7,0,0,"-"],vectors:[8,0,0,"-"],vocab:[9,0,0,"-"]},"torchtext.experimental.datasets":{AG_NEWS:[6,4,1,""],AmazonReviewFull:[6,4,1,""],AmazonReviewPolarity:[6,4,1,""],CoNLL2000Chunking:[6,4,1,""],DBpedia:[6,4,1,""],IMDB:[6,4,1,""],IWSLT:[6,4,1,""],LanguageModelingDataset:[6,1,1,""],Multi30k:[6,4,1,""],PennTreebank:[6,4,1,""],QuestionAnswerDataset:[6,1,1,""],SQuAD1:[6,4,1,""],SQuAD2:[6,4,1,""],SequenceTaggingDataset:[6,1,1,""],SogouNews:[6,4,1,""],TextClassificationDataset:[6,1,1,""],TranslationDataset:[6,1,1,""],UDPOS:[6,4,1,""],WMT14:[6,4,1,""],WMTNewsCrawl:[6,4,1,""],WikiText103:[6,4,1,""],WikiText2:[6,4,1,""],YahooAnswers:[6,4,1,""],YelpReviewFull:[6,4,1,""],YelpReviewPolarity:[6,4,1,""]},"torchtext.experimental.datasets.LanguageModelingDataset":{__init__:[6,2,1,""]},"torchtext.experimental.datasets.QuestionAnswerDataset":{__init__:[6,2,1,""]},"torchtext.experimental.datasets.SequenceTaggingDataset":{__init__:[6,2,1,""]},"torchtext.experimental.datasets.TextClassificationDataset":{__init__:[6,2,1,""]},"torchtext.experimental.datasets.TranslationDataset":{__init__:[6,2,1,""]},"torchtext.experimental.transforms":{BasicEnglishNormalize:[7,1,1,""],RegexTokenizer:[7,1,1,""],SentencePieceProcessor:[7,1,1,""],SentencePieceTokenizer:[7,1,1,""],TextSequentialTransforms:[7,1,1,""],VectorTransform:[7,1,1,""],VocabTransform:[7,1,1,""],load_sp_model:[7,4,1,""],sentencepiece_processor:[7,4,1,""],sentencepiece_tokenizer:[7,4,1,""]},"torchtext.experimental.transforms.BasicEnglishNormalize":{__init__:[7,2,1,""],forward:[7,2,1,""],to_ivalue:[7,2,1,""]},"torchtext.experimental.transforms.RegexTokenizer":{__init__:[7,2,1,""],forward:[7,2,1,""],to_ivalue:[7,2,1,""]},"torchtext.experimental.transforms.SentencePieceProcessor":{__init__:[7,2,1,""],decode:[7,2,1,""],forward:[7,2,1,""]},"torchtext.experimental.transforms.SentencePieceTokenizer":{__init__:[7,2,1,""],decode:[7,2,1,""],forward:[7,2,1,""]},"torchtext.experimental.transforms.TextSequentialTransforms":{forward:[7,2,1,""],to_ivalue:[7,2,1,""]},"torchtext.experimental.transforms.VectorTransform":{__init__:[7,2,1,""],forward:[7,2,1,""]},"torchtext.experimental.transforms.VocabTransform":{__init__:[7,2,1,""],forward:[7,2,1,""]},"torchtext.experimental.vectors":{FastText:[8,4,1,""],GloVe:[8,4,1,""],Vectors:[8,1,1,""],build_vectors:[8,4,1,""],load_vectors_from_file_path:[8,4,1,""]},"torchtext.experimental.vectors.Vectors":{__getitem__:[8,2,1,""],__init__:[8,2,1,""],__len__:[8,2,1,""],__setitem__:[8,2,1,""],forward:[8,2,1,""],lookup_vectors:[8,2,1,""],to_ivalue:[8,2,1,""]},"torchtext.experimental.vocab":{Vocab:[9,1,1,""],build_vocab_from_iterator:[9,4,1,""],build_vocab_from_text_file:[9,4,1,""],load_vocab_from_file:[9,4,1,""],vocab:[9,4,1,""]},"torchtext.experimental.vocab.Vocab":{__getitem__:[9,2,1,""],__init__:[9,2,1,""],__len__:[9,2,1,""],append_token:[9,2,1,""],forward:[9,2,1,""],get_itos:[9,2,1,""],get_stoi:[9,2,1,""],insert_token:[9,2,1,""],lookup_indices:[9,2,1,""],lookup_token:[9,2,1,""],lookup_tokens:[9,2,1,""],to_ivalue:[9,2,1,""]},"torchtext.nn.modules":{multiheadattention:[11,0,0,"-"]},"torchtext.nn.modules.multiheadattention":{InProjContainer:[11,1,1,""],MultiheadAttentionContainer:[11,1,1,""],ScaledDotProduct:[11,1,1,""]},"torchtext.nn.modules.multiheadattention.InProjContainer":{__init__:[11,2,1,""],forward:[11,2,1,""]},"torchtext.nn.modules.multiheadattention.MultiheadAttentionContainer":{__init__:[11,2,1,""],forward:[11,2,1,""]},"torchtext.nn.modules.multiheadattention.ScaledDotProduct":{__init__:[11,2,1,""],forward:[11,2,1,""]},"torchtext.utils":{download_from_url:[12,4,1,""],extract_archive:[12,4,1,""],reporthook:[12,4,1,""],unicode_csv_reader:[12,4,1,""]},"torchtext.vocab":{CharNGram:[13,1,1,""],FastText:[13,1,1,""],GloVe:[13,1,1,""],SubwordVocab:[13,1,1,""],Vectors:[13,1,1,""],Vocab:[13,1,1,""],build_vocab_from_iterator:[13,4,1,""]},"torchtext.vocab.SubwordVocab":{__init__:[13,2,1,""]},"torchtext.vocab.Vectors":{__init__:[13,2,1,""],get_vecs_by_tokens:[13,2,1,""]},"torchtext.vocab.Vocab":{__init__:[13,2,1,""],load_vectors:[13,2,1,""],set_vectors:[13,2,1,""]},torchtext:{data:[0,0,0,"-"],utils:[12,0,0,"-"],vocab:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0_dev":4,"0_dev_match":4,"0_dev_mismatch":4,"0_test":4,"0_train":4,"100d":13,"200d":13,"25d":13,"27b":[8,13],"300d":13,"42b":[8,13],"50d":13,"840b":[8,13],"\u00fcbersetzungsdatensatz":6,"abstract":[4,6],"break":10,"byte":4,"case":[0,4,6,13],"char":[1,8],"class":[0,4,6,7,8,9,11,13],"default":[0,1,2,3,4,6,8,9,11,12,13],"float":[0,8,11],"function":[3,6,7,9,10,13],"import":[0,1,2,3,4,5,6,7,9,11,12],"int":[0,7,8,9,13],"long":[0,6,10],"new":[0,4,5,6,9],"return":[0,3,4,6,7,8,9,12,13],"short":0,"static":0,"true":[0,4,5,8,9,11,13],"try":1,"while":[0,7,11],And:0,For:[0,4,6,10,13],One:[0,13],POS:[4,6],The:[0,1,4,6,7,8,9,10,11,13],Their:0,Then:0,There:4,These:10,Use:[0,4],Useful:0,Uses:11,Using:0,__getitem__:[8,9,13],__init__:[0,4,6,7,8,9,11,13],__len__:[8,9],__setitem__:8,_as:1,_basic_english_norm:[0,3],_dev:5,_en:1,_exampl:1,_only_:0,_piec:1,_sentenc:1,_tensorbas:13,_test:5,_to:1,_train:5,_try:1,abil:[0,5],abl:0,abov:5,accept:0,access:4,accord:0,accur:0,aclweb:2,across:10,activ:[4,11],add:[0,4,13],add_aft:0,add_befor:0,added:[9,11,13],adding:0,addit:[4,13],addition:9,affect:0,aforement:13,after:[0,4,6,7],afterward:7,ahead:10,album:[4,6],alia:0,all:[0,4,6,7,8,11],allow:[0,11],along:0,alreadi:[0,9],also:[0,4,6,7,10,11],altern:13,although:[7,10],alwai:0,among:12,amount:0,analysi:[6,10],ani:[0,6,9,13],anim:[4,6],ann:4,annot:4,anoth:[0,2,13],ans_po:6,ans_pos_transform:6,answer:[0,10],answers_transform:6,antholog:2,api:10,appear:9,append:0,append_token:9,appl:5,appli:[0,9,11],approach:4,archiv:[0,4,12],arg:[0,4,7,8,11],argument:[0,4,11,13],arr:0,articl:4,artist:[4,6],ascend:0,asset:8,assign:0,associ:[0,4,8,9,13],assum:[0,4],athlet:[4,6],attend:11,attent:11,attention_lay:11,attn_mask:11,attn_output:11,attn_output_weight:11,attn_weight:11,attribut:0,autograd:0,automobil:[4,6],avail:[4,6,10,13],babi:[8,13],backpropag:[0,4],backward:[0,10],banana:5,base:[1,2,4,6,7,10],basic:7,basic_english:[0,3,6],basic_english_norm:[7,9],basicenglishnorm:10,batch:[4,5,10,11],batch_first:[0,4,11],batch_siz:[0,4,5],batch_size_fn:0,beatric:4,beauti:[8,13],becaus:10,been:[0,6,9],befor:[0,11],begin:[0,4],begin_lin:4,behind:10,being:[0,4],below:[6,12],benchmark:4,beta:10,between:[0,2,8,9],bia:11,bias_k:11,bias_v:11,bigram:2,binari:10,bit:0,bleu:2,bleu_scor:10,block:5,bookcorpu:7,bool:[0,8],booltensor:11,borrow:12,both:[0,4,6,7,8,9,11],bottom:11,bpe:[1,4,6,7],bptt:0,bptt_len:[0,4],brain:4,broadcast:11,bsz:11,bucket:0,bucketiter:[4,5],build:[0,4,5,6,9,13],build_vector:10,build_vocab:[0,4,5],build_vocab_from_iter:[6,10],build_vocab_from_text_fil:10,busi:[4,6],cach:13,call:[0,7,8,9],callabl:[0,3,4,6],callback:13,can:[0,3,8,9,10,13],candid:2,candidate_corpu:2,care:7,categori:2,certain:11,chang:10,charact:[0,7,8],charngram:10,check:[0,11],checksum:8,chip:[8,13],choos:6,chunk:[0,4,6],classif:[0,10],classifi:10,classmethod:[0,4],clean:[4,6],cls:[0,4],collect:[9,13],column:[0,6],com:[7,12],combin:0,come:0,commit:10,common:[0,4],compani:[4,6],compat:[0,6,10],complet:[2,4,10],compon:5,compos:0,compress:4,comput:[2,4,6,7],conda:10,configur:4,conll:[4,6],consist:[0,10],construct:0,constructor:[0,4,13],contain:[0,4,7,9,11,13],context:6,context_transform:6,contigu:[0,4,6],continu:5,convent:0,convert:[0,1],convert_token:0,copi:0,corpu:[2,4],correspond:[0,1,3,8,9,11],could:6,count:0,counter:[9,13],coverag:10,cpu:[0,4,8,9],creat:[0,4,6,8,9,13],cri:0,csv:[0,1,8,12],csv_reader_param:[0,4],cultur:[4,6],current:[0,4,6],custom:[0,5,6,11,13],custom_replac:10,custom_replace_transform:1,data:[4,5,6,8,9,10,12,13],data_path:12,dataset:[1,5,7,8,10],datatyp:0,dcs:12,de_core_news_sm:6,declar:5,decod:[7,11],defaultdict:13,defer:0,defin:[0,4,5,6,7,13],definit:11,delet:0,delimit:8,denot:0,dep_pars:6,depend:[4,6],deprec:0,descend:[0,13],describ:[0,5,10],detail:[0,7,11],determin:8,dev2010:6,dev2012:6,dev:[4,6],devic:[0,4,5,10],dict:[0,4,9],dictionari:[0,6,9,13],differ:[0,2,4,7,8],dim:[4,8,11,13],dimens:[0,8,11],dimension:13,directli:[0,5],directori:[0,4,6,12,13],discard:0,distribut:10,doc:[0,8,12],document:10,doe:[0,12],doesn:13,dot:11,download:[0,4,8,12,13],download_from_url:[7,10],drive:12,drop:11,dropout:11,dtype:0,duplic:8,dure:0,dynam:0,each:[0,2,4,6,8,9,13],earli:10,educ:[4,6],educationalinstitut:[4,6],effect:0,either:[4,13],element:[0,4,13],els:0,embed:[0,8,11],embed_dim:11,empti:8,en_core_web_sm:6,enabl:0,encod:[0,1,4,12],end:[0,5,9],english:[4,6],entail:10,entertain:[4,6],entir:13,enwik9:7,enwiki:4,eos:[4,13],eos_token:0,epoch:0,escap:7,etc:0,even:12,eventu:5,everi:[0,4,7],exampl:[1,2,3,4,6,7,8,9,10,11,12,13],except:10,exist:[0,9,12],expand:4,expect:[0,10,11,13],experiment:10,explicitli:7,ext:[4,5],extens:4,extra_field:4,extract:[0,12],extract_arch:10,factori:[7,8,9,13],fals:[0,4,5,8,11,12,13],famili:[4,6],fasttext:[6,7,10],featur:[10,11],feedback:10,field:[4,5,10,13],field_nam:[0,4],field_to_index:0,fig:11,file:[0,1,4,7,8,9,12,13],file_object:9,filenam:[1,4,6],fileobject:9,filepath:8,fill:0,film:[4,6],filter_exampl:0,filter_pr:[0,4],financ:[4,6],fine_grain:4,first:[0,3,4,7,9,13],firstli:0,fit:13,fix:0,fix_length:0,flag:[8,10],flexibl:[0,4],flickr30k:4,floattensor:13,folder:[0,8,12],follow:[0,4,6,7],food:5,form:[0,4,6],format:[0,4,5,8,9],former:7,forward:[0,7,8,9,11],found:[6,8,9,13],framework:10,freq:13,frequenc:[9,13],freshli:0,from:[0,1,2,3,4,5,6,7,8,9,11,12,13],from_path:12,fromcsv:0,fromdict:0,fromjson:0,fromlist:0,fromtre:0,fromvar:0,fruit:5,full:2,func:11,further:0,gap:10,gener:[0,1,3,4,6,7,9,10],generate_sp_model:10,genre_field:4,german:4,get:8,get_ito:9,get_stoi:9,get_token:[6,10],get_vecs_by_token:13,get_vectors_by_token:8,get_vocab:[4,6],getstat:0,github:[7,12],given:[0,3,4,10,13],glove:[4,10],going:0,googl:[4,7,12],govern:[4,6],gpu:4,gram:2,group:0,handl:[7,12],happen:[10,11],has:[0,6,8,9],hash:12,hash_typ:12,hash_valu:12,have:[0,4,6,8,11],head:11,header:12,health:[4,6],help:0,here:[0,3,5,7],highest:4,highli:[4,6],hold:[0,9,13],hook:7,host:7,how:[0,4,5],howev:[0,10],html:[0,8,12],http:[0,2,7,8,12],hypothesi:4,ident:0,identif:8,identifi:13,ids:[1,6,7],ids_it:1,ignor:[0,7],implement:[0,4],improv:[10,13],in_proj_contain:11,includ:[0,1,4,5,6,9,13],include_length:[0,4],include_unk:4,increment:11,indent:0,independ:0,index:[0,9,10,13],indic:[0,9],individu:0,infer:0,inherit:4,init_epoch:0,init_token:0,initi:[0,4,6,7,8,9,13],inprojcontain:10,input:[0,1,6,7,11,13],input_field:0,insensit:0,insert:9,insert_token:9,insid:9,instal:[0,3],instanc:[0,4,6,7,13],instanti:13,instead:[4,6,7],instruct:0,int64:0,integ:[4,6,7],interleav:0,interleave_kei:5,intern:[7,8,9],internet:[4,6],is_target:0,isn:[8,9],item:[0,4,6,9],iter:[1,2,3,4,5,6,9,10,13],ito:[9,13],its:[0,6],itself:0,iwslt16:[4,6],jit:[7,9],jit_spm_processor:7,jit_spm_token:7,jit_token:9,jit_txt_pipelin:7,jit_vector_transform:7,jit_vocab_transform:7,jitabl:[7,8,9],jite:9,jited_token:9,john:0,joint:[0,4],json:[0,5],json_kei:4,jsonl:4,just:[0,6,7],kei:[0,5,9,11,13],key_proj:11,keyword:[0,4,11,13],kind:0,known:[4,13],kwarg:[0,4,12,13],label1:[4,6],label2:[4,6],label:[0,4,5,6],label_field:4,lambda:[0,5,9],languag:[0,3,8,10,13],languagemodelingdataset:[4,6],larg:4,last:[11,13],latter:7,layer:11,learn:10,left:0,len:[5,8,13],length:[0,4,8,9,11],less:[9,13],lettuc:5,level:4,librari:[0,3,10,12],like:[0,9,10],limit:[10,13],line:[0,4,7,9],linear:11,list:[0,1,2,3,4,6,7,8,9,12,13],list_a:1,load:[0,1,4,5,7,8,9,13],load_sp_model:10,load_vector:[4,13],load_vectors_from_file_path:10,load_vocab_from_fil:10,loader:0,local:8,logic:12,longest:0,longtensor:5,look:[8,13],lookup:[8,9],lookup_indic:9,lookup_token:9,lookup_vector:8,love:[0,4],lower:[0,4,13],lower_case_backup:13,lowercas:0,m_user:[1,7],machin:[0,10],mai:10,maintain:10,major:10,make:4,mani:0,manner:0,map:[8,9,11,13],marcinkiewicz:4,marcu:4,mari:[0,4],marrow:5,mask:11,match:2,mathemat:[4,6],max_n:2,max_siz:[5,13],max_vector:13,maximum:[2,13],md5:12,mean:0,meanoftransport:[4,6],memori:13,merger:0,meta:7,method:[0,4,7,8,9,13],metric:10,mha:11,min_freq:[9,13],minibatch:0,minim:0,minimum:[9,13],miss:0,mitchel:4,model:[0,1,7,10,11],model_prefix:1,model_typ:1,modifi:12,modul:[0,7,8,9,10],more:[0,6,7,11],mose:[0,3],most:[4,13],mt_dev:5,mt_train:5,multi:11,multiheadattent:10,multiheadattentioncontain:10,multimod:4,multinli_1:4,multipl:[0,4,11],music:[4,6],must:[0,4,6,9,13],mutabl:0,my_custom_token:5,name:[0,3,4,5,7,8,13],natur:[0,10],naturalplac:[4,6],necessari:0,need:[0,7,9,10,11,12,13],neg:[4,6],nest:[0,5],nesting_field:0,newlin:4,newline_eo:4,newstest2009:6,newstest2010:6,newstest2011:6,newstest2012:6,newstest2013:[4,6],newstest2014:[4,5,6],newstest2015:6,newstest2016:6,next:[0,5],ngram:[3,4,6],ngrams_iter:10,nhead:11,nlp:[0,5],non:[0,11],none:[0,1,3,4,6,8,9,11,12,13],normal:[0,3,5,7],note:[0,4,5,6,7,8,9,11],notic:10,now:[0,3],num1:8,num2:8,num3:8,num4:8,num5:8,num6:8,num:1,num_cpu:[8,9],num_head:11,num_j:8,num_k:8,num_lin:[4,13],num_m:8,number:[0,3,4,6,8,9,11,13],numer:[0,13],numeric:[0,1,4,5,6,13],numericalize_tokens_from_iter:10,object:[0,1,4,5,6,7,8,9,13],obtain:6,officehold:[4,6],one:[0,4,6,7,10,11,13],onli:[0,4,6],onlin:0,only_support:4,oov:0,open:[1,7,9,10,12],oper:[10,11],option:[0,8,11,12,13],order:[0,4,9,11,13],ordered_dict:9,ordereddict:9,org:[0,2,12],origin:[0,4,13],other:[0,13],otherwis:0,out:[5,11,13],out_proj:11,output:[1,6,7,11],over:[0,1],overal:11,overrid:0,overridden:7,overwrit:12,overwritten:12,p02:2,packag:10,pad:[0,5,13],pad_first:0,pad_token:0,page:[4,10],pair:[0,4,9,11],paper:11,parallel:9,param:[8,9],paramet:[0,1,2,3,4,6,7,8,9,11,12,13],pars:5,parse_field:4,parser:4,part:[0,4,10],partit:0,pass:[0,4,5,7,11,13],path:[0,1,4,5,7,8,12],pdf:2,penn:4,perform:[7,10],pickl:0,piec:1,pip:[0,3],pipe:0,pipelin:[5,10],plant:[4,6],pleas:7,polar:[4,6],polit:[4,6],popular:10,pos:5,pos_wsj:5,pos_wsj_train:5,posit:[0,4,6,11],possibl:0,postprocess:0,pprint:0,pre:[7,13],prefix:[0,1,4],premis:4,prepend:[0,13],preprocess:[0,4,5,6],preprocessor:0,present:0,pretain:7,pretrain:[4,7],pretrained_sp_model:7,prettyprint:0,prevent:11,primarili:0,print:[1,11],probabl:11,procedur:0,process:[0,6,10,11],produc:0,product:11,progress:13,proj:11,project:[4,10,11],pron:4,properti:[0,13],propn:4,prototyp:10,provid:[0,4,6,7,8,9,11],ptb:4,punct:4,purpos:11,pypi:10,python:[0,12],pytorch:[0,2,4,10],queri:11,query_proj:11,quest:12,question:[0,10],question_transform:6,questionanswerdataset:6,rais:[8,9],rand:11,randn:11,random:0,random_shuffl:0,random_st:0,rate:[4,6],raw:[6,9],read:[8,9],reader:[0,12],reason:13,recip:7,recommend:[4,6],reduc:4,refer:[0,2,4,6,7,10],references_corpu:2,reflect:9,regex:7,regex_token:7,regex_tokenzi:7,regextoken:10,regist:7,rel:[0,4],relat:0,relationship:[4,6],releas:[5,10],relev:0,remain:[0,4,13],remov:[0,1,6],removed_token:[1,6],renam:0,repeat:0,replac:0,replace_pattern:1,report:13,reporthook:10,repres:[0,8,13],represent:0,reshap:11,respect:[0,6,9,11],rest:0,result:[0,4],ret:[8,13],retir:5,revers:[4,9],revtok:[0,3,13],rewritten:6,root:[0,4,6,8,12],run:[7,8,10],runtimeerror:[8,9],same:[0,6,11,13],sampl:[0,5],santorini:4,save:[1,4,6,7],scale:11,scaleddotproduct:10,sci:[4,6],scienc:[4,6],score:2,script:[7,9],scriptmodul:[7,8,9],sdp:11,search:10,see:[0,4,5,6,10,11,12,13],seed:0,segment:0,select:0,self:[0,13],sent:11,sentenc:[0,1,2,3,4,7],sentence_len:0,sentence_token:5,sentencepiec:[1,7],sentencepiece_numeric:10,sentencepiece_processor:10,sentencepiece_token:10,sentencepieceprocessor:10,sentencepiecetoken:10,sentiment:[5,6,10],sentiment_gold:5,separ:[1,4,6,9],seq:11,sequenc:[0,7,10,11],sequence_tag:4,sequencetaggingdataset:[4,6],sequenti:[0,4,5,7],serial:0,serializ:0,set:[0,4,6,9,11,13],set_vector:13,sever:7,sha256:12,shape:[8,11,13],share:[0,5,7,8,9],shef:12,shift:4,should:[0,6,7,8,9,10,11,13],shouldn:0,shuffl:0,signatur:0,significantli:4,silent:7,similar:0,simpl:13,simple_space_split:10,simplest:4,simpli:11,sinc:[0,7,12],singl:0,situat:13,size:[0,1,4,7,8,9,11,13],skip:0,skip_head:[0,4],slightli:[4,12],small:4,snli_1:4,societi:[4,6],some:5,sometim:10,sort:[0,9,13],sort_kei:[0,5],sort_within_batch:0,sorted_by_freq_tupl:9,sourc:[0,1,2,3,4,6,7,8,9,10,11,12,13],sp_id_gener:1,sp_model:[1,7],sp_model_path:7,sp_tokens_gener:1,space:[0,1,3],spaci:[0,3,6],special:13,specials_first:13,specifi:0,speech:4,split:[0,1,3,4,5,6,7],split_ratio:0,spm:1,spm_model:7,spm_processor:7,spm_token:7,spm_transform:7,spm_user:1,sport:[4,6],squad1:6,squad2:6,src:5,src_data:6,src_tensor0:6,src_tensor1:6,src_token:6,src_vocab:6,stabl:10,stack:0,stage:10,standard:12,state:[7,8,9],statu:10,step:0,stoi:[9,13],stop_word:0,storag:[0,4],store:[0,4,8,12],str:[0,4,7,8,9,12],strata_field:0,stratifi:0,stream:0,string:[0,1,3,4,6,7,8,13],structur:13,sub:[0,4],subclass:[4,6,7],subdirectori:4,subphras:4,subset:0,subtre:[0,4],subword:[0,3,13],subwordvocab:[0,10],suffix:[0,4],supervis:4,suppli:0,support:[0,4,6,8,11,13],symbol:7,tabulardataset:5,tag:10,take:[0,7,13],talk:4,tar:12,target:[0,6,11],target_field:0,task:[0,4],tech:[4,6],technolog:[4,6],ted:[4,6],tedx:6,tenk:4,tensor2tensor:12,tensor:[0,4,6,7,8,11,13],term:10,test2016:[4,6],test:[0,1,2,4,5,6,8,10],test_2016:6,test_2016_flickr:6,test_2017_flickr:6,test_2017_mscoco:6,test_2018_flickr:6,test_dataset:[4,6],test_field:0,test_filenam:6,test_it:[4,5],text1:6,text2:6,text3:6,text:[0,1,5,7,8,9,10,13],text_bpe_15000:7,text_bpe_25000:7,text_bpe_50000:7,text_classif:4,text_field:4,text_unigram_15000:7,text_unigram_25000:7,text_unigram_50000:7,textsequentialtransform:10,tgt_data:6,tgt_tensor0:6,tgt_tensor1:6,tgt_token:6,tgt_vocab:6,tgz:0,than:[9,11,13],thei:[0,4,13],them:[0,4,6,7,11],therefor:[4,9],thi:[0,4,7,9,10,11,13],those:[0,11],though:4,three:[0,6,11],through:[0,4,10],thu:13,time:[0,4,10],timestep:0,to_ivalu:[7,8,9],to_path:12,togeth:0,tok:[4,6],token1:[8,9],token2:[8,9],token:[0,1,2,3,4,5,6,7,8,9,13],token_id1:6,token_id_1:6,token_id_2:6,token_id_3:6,token_id_s1:6,token_id_s2:6,token_id_s3:6,token_id_t1:6,token_id_t2:6,token_id_t3:6,token_list:3,token_n:[8,9],tokenizer_languag:0,tokens1:4,tokens2:4,tokens3:4,toktok:[0,3],torch:[0,4,6,7,8,9,11,13],torchaudio:10,torchelast:10,torchserv:10,torchtext:5,torchvis:10,tqdm:12,train:[0,1,4,5,6,7,13],train_5500:4,train_dataset:[4,6],train_filenam:6,train_it:[4,5],train_subtre:4,transform:[0,1,6,9,10],transit:4,translat:[0,2,10],translationdataset:[4,5,6],treat:[0,7],trec_10:4,tree:4,treebank:[4,6],trg:5,trigram:2,tring:6,truncat:0,truncate_first:0,tst2010:6,tst2011:6,tst2012:6,tst2013:[4,6],tst2014:[4,6],tsv:[0,5],tupl:[0,4,6,11],turn:0,twitter:[8,13],two:[0,1,6],txt:[4,7,9],txt_pipelin:7,type:[0,1,4,7,8,9,12],typeerror:8,typic:[10,11],unchang:11,unexpect:8,unicod:[7,12],unicode_csv_data:12,unicode_csv_read:10,uniform:2,unigram:[1,2,7],univers:[4,6],unk:[0,9,13],unk_init:13,unk_tensor:8,unk_token:[0,9],unknown:[0,4,8,9],unsupervis:10,untoken:0,unus:0,unzip:0,updat:11,url:[12,13],usag:[5,11],use:[0,2,4,6,8,9],use_vocab:0,used:[0,2,4,6,7,8,9,11,12,13],useful:0,user:[0,6,9,10,11],using:[0,3,9,11],utf8:12,utf:[0,4],util:[4,6,7,10],val:[4,5,6,12],val_it:5,valid:[0,4,5,6,8,12],valid_dataset:6,valid_filenam:6,validate_fil:8,validation_frac:4,valu:[0,8,9,11,13],value_proj:11,valueerror:[8,9],variabl:[0,13],variou:0,vec:[8,13],vector:[4,7,9,10],vector_cach:13,vector_dim:8,vector_transform:7,vectors_cach:13,vectortransform:10,veg:5,veget:5,verb:4,version:4,villag:[4,6],voabulari:6,vocab:[0,1,4,5,6,7,8,10],vocab_cl:0,vocab_from_file_object:7,vocab_s:1,vocab_transform:7,vocabtransform:10,vocabulari:[0,1,4,5,6,7,9,13],wai:[4,9],want:[2,11],web:6,weight:[2,11],well:6,were:[7,9],when:[0,8,9],where:[0,4,6,11,13],whether:[0,4,8,13],which:[0,3,4,6,8,9],whitespac:7,whose:[0,4],wiki:4,wikitext103:7,wikitext2:[4,6],within:[0,7,8,9],wmt16:5,wmt16_files_mmt:12,wmt:4,word:[0,1,4,6],word_length:0,work:5,world:[4,6],would:0,wrapper:[0,5,12],writtenwork:[4,6],wv_dim:4,wv_dir:4,wv_type:4,www:[2,12],xla:10,xml:4,year:6,yet:10,yield:[0,1,3,9,13],you:[0,3,11],zero:13,zero_:13,zip:[0,4]},titles:["torchtext.data","torchtext.data.functional","torchtext.data.metrics","torchtext.data.utils","torchtext.datasets","Examples","torchtext.experimental.datasets","torchtext.experimental.transforms","torchtext.experimental.vectors","torchtext.experimental.vocab","torchtext","torchtext.nn.modules.multiheadattention","torchtext.utils","torchtext.vocab"],titleterms:{"function":[0,1],ag_new:[4,6],amazonreviewful:[4,6],amazonreviewpolar:[4,6],analysi:4,answer:[4,6],babi20:4,basicenglishnorm:7,batch:0,bleu_scor:2,bpttiter:0,bucketiter:0,build_vector:8,build_vocab_from_iter:[9,13],build_vocab_from_text_fil:9,charngram:13,classif:[4,6],conll2000chunk:[4,6],custom_replac:1,data:[0,1,2,3],dataset:[0,4,6],dbpedia:[4,6],download_from_url:12,embed:13,entail:4,enwik9:4,exampl:[0,5],experiment:[6,7,8,9],extract_arch:12,fasttext:[8,13],field:0,generate_sp_model:1,get_token:[0,3],glove:[8,13],imdb:[4,6],indic:10,inprojcontain:11,interleave_kei:0,iter:0,iwslt:[4,6],languag:[4,6],learn:4,load_sp_model:[1,7],load_vectors_from_file_path:8,load_vocab_from_fil:9,machin:[4,6],metric:2,misc:13,model:[4,6],modul:11,multi30k:[4,6],multiheadattent:11,multiheadattentioncontain:11,multinli:4,nestedfield:0,ngrams_iter:3,numericalize_tokens_from_iter:1,penntreebank:[4,6],pipelin:0,pool:0,pretrain:13,question:[4,6],rawfield:0,regextoken:7,reporthook:12,reversiblefield:0,scaleddotproduct:11,sentencepiece_numeric:1,sentencepiece_processor:7,sentencepiece_token:[1,7],sentencepieceprocessor:7,sentencepiecetoken:7,sentiment:4,sequenc:[4,6],simple_space_split:1,snli:4,sogounew:[4,6],squad:6,sst:4,subwordfield:0,subwordvocab:13,tabl:10,tabulardataset:0,tag:[4,6],text:[4,6],textclassificationdataset:[4,6],textsequentialtransform:7,torchtext:[0,1,2,3,4,6,7,8,9,10,11,12,13],transform:7,translat:[4,6],trec:4,udpo:[4,6],unicode_csv_read:12,unsupervis:4,util:[3,12],vector:[8,13],vectortransform:7,vocab:[9,13],vocabtransform:7,wikitext103:[4,6],wikitext:[4,6],wmt14:[4,6],wmtnewscrawl:6,word:13,yahooansw:[4,6],yelpreviewful:[4,6],yelpreviewpolar:[4,6]}})